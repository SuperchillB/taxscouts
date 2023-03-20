import { mount } from 'cypress/react18';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../src/styles';
import BookSearch from '../../src/features/book-search';
import theme from '../../src/styles/theme';
import { store } from '../../src/store';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const mountComponent = (children: React.ReactElement) => {
  return mount(
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ReduxProvider>,
  );
};

describe('<BookSearch />', () => {
  let requestCounter = 0;
  beforeEach(() => {
    cy.viewport(1200, 900);

    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <BookSearch />,
        },
      ],
      {
        initialEntries: ['/'],
      },
    );

    mountComponent(<RouterProvider router={router} />);

    cy.intercept(
      {
        method: 'GET',
        url: '**/search.json?*',
      },
      () => {
        requestCounter += 1;
        return {
          fixture: 'book-search-results.json',
        };
      },
    ).as('searchBooks');
  });

  afterEach(() => {
    requestCounter = 0;
  });

  it('should render', () => {
    cy.getByTestId('book-searchbar')
      .should('exist')
      .within(($searchbar) => {
        cy.wrap($searchbar)
          .get('input[type="text"]')
          .should('exist')
          .should('have.value', '');
      });

    cy.getByTestId('book-search-results').should('not.exist');
  });

  it("shouldn't trigger an API request until 4 characters are typed in the search box", () => {
    cy.get('input[type="text"]')
      .should('exist')
      .clear()
      .should('have.value', '')
      .type('ab')
      .should('have.value', 'ab');

    cy.getByTestId('searchbar-empty-btn').should('exist');
    cy.getByTestId('book-search-results').should('not.exist');

    cy.get('input[type="text"]')
      .should('exist')
      .clear()
      .should('have.value', '')
      .type('abcd')
      .should('have.value', 'abcd');

    cy.wait('@searchBooks');
    cy.getByTestId('searchbar-empty-btn').should('exist');
    cy.getByTestId('book-search-results').should('exist');
  });

  it('should display skeleton UI when fetching data', () => {
    cy.get('input[type="text"]').type('harry');

    cy.getByTestId('book-search-item-skeleton').should('exist');
    cy.wait('@searchBooks').then((interception) => {
      expect(interception.response.body.docs.length).to.be.lte(10);
      expect(interception.response.body.offset).to.equal(0);
    });
  });

  it('should return a list of results when typing a book name and load more books when clicking on the Load More button', () => {
    cy.get('input[type="text"]').type('harry potter');

    // cy.getByTestId('book-search-item-skeleton').should('exist');

    cy.wait('@searchBooks').then((interception) => {
      expect(interception.response.body.docs.length).to.be.lte(10);
      expect(interception.response.body.offset).to.equal(0);

      cy.getByTestId('book-search-item-skeleton').should('not.exist');
    });

    cy.intercept(
      {
        method: 'GET',
        url: '**/search.json?*',
      },
      {
        fixture: 'book-search-results-2.json',
      },
    ).as('searchMoreBooks');

    cy.getByTestId('book-search-results').within(($searchResults) => {
      cy.wait(5000);
      cy.wrap($searchResults)
        .get('button')
        .should('exist')
        .click({ force: true });
    });

    // cy.getByTestId('book-search-item-skeleton').should('exist');

    cy.wait('@searchMoreBooks', { timeout: 30000 }).then((intercept) => {
      cy.getByTestId('book-search-item-skeleton').should('not.exist');
      expect(intercept.response.body.docs.length).to.be.lte(10);
      expect(intercept.response.body.offset).to.equal(10);
      cy.getByTestId('book-search-item').its('length').should('be.gte', 10);
    });
  });

  it('should display an empty state illustration with some text when no results were found', () => {
    const searchQuery = 'liuwhefliuwe';
    cy.get('input[type="text"]').type(searchQuery);

    cy.wait('@searchBooks').then((interception) => {
      expect(interception.response.body.docs.length).to.equal(0);
      cy.getByTestId('book-search-results').within(($searchResults) => {
        cy.wrap($searchResults).contains(
          `No results found for "${searchQuery}"`,
        );
        cy.wrap($searchResults)
          .get('img')
          .should('have.attr', 'src')
          .should('not.be.empty')
          .and('contain', 'hands-phone-pink.png');
      });
    });
  });

  it('should cache previous results', () => {
    cy.get('input[type="text"]').clear().type('tolkien');

    cy.getByTestId('book-search-results').should('exist');

    cy.wait('@searchBooks').then((interception) => {
      const book = interception.response.body.docs[0];
      expect(book.key).to.equal('/works/OL27448W');

      requestCounter = 0;

      cy.getByTestId('searchbar-empty-btn').should('exist').click();
    });

    cy.get('input[type="text"]').type('tolkien');

    cy.getByTestId('book-search-results').should('exist');
    cy.getByTestId('book-search-item')
      .first()
      .should('exist')
      .contains('The Lord of the Rings (1954)');

    expect(requestCounter).to.equal(0);
  });
});
