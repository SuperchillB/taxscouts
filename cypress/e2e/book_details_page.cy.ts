/// <reference types="cypress" />

describe('Book details page', () => {
  let requestCounter = 0;
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/search.json?*',
      },
      () => {
        requestCounter += 1;
        return {
          fixture: 'book-details.json',
        };
      },
    ).as('getBookDetails');

    cy.visit('/');
  });

  afterEach(() => {
    requestCounter = 0;
  });

  // Empty state
  it("should display an empty state illustration with some text when trying to access a book that doesn't exist", () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/search.json?*',
      },
      {
        fixture: 'book-details-empty.json',
      },
    ).as('getEmptyBookDetails');

    cy.visit('/books/kyuefkugyw');

    cy.wait('@getEmptyBookDetails').then((interception) => {
      expect(interception.response.body.docs.length).to.equal(0);
      cy.url().should('include', '/books/kyuefkugyw');
      cy.getByTestId('book-details-empty-state').should('exist');
      cy.contains("We couldn't fetch this book, please try again later");
    });
  });

  // Contents
  it('should display skeleton UI whilst loading and book details with working links once fetched', () => {
    cy.visit('/books/OL19733362W');

    cy.getByTestId('book-details-skeleton').should('exist');

    cy.wait('@getBookDetails').then((interception) => {
      cy.getByTestId('book-details-skeleton').should('not.exist');

      const book = interception.response.body.docs[0];
      expect(book.key).to.equal('/works/OL19733362W');
      cy.url().should('include', '/books/OL19733362W');
      cy.getByTestId('book-details-container').should('exist');
      cy.contains('Book details');
      cy.contains('The master and his emissary');

      const amazonPartialHref = `https://www.amazon.co.uk/${encodeURIComponent(
        book.title,
      )}/dp/`;
      const authorHref = `https://openlibrary.org/authors/${book.author_key[0]}`;

      cy.getByTestId('book-amazon-link')
        .should('exist')
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'href')
        .should('not.be.empty')
        .and('contain', amazonPartialHref);

      cy.getByTestId('book-author-link')
        .should('exist')
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'href')
        .and('include', authorHref);
    });
  });

  // Caching
  it('should not perform same API request when coming back to the same page', () => {
    cy.visit('/books/OL19733362W');

    cy.wait('@getBookDetails').then((interception) => {
      const book = interception.response.body.docs[0];
      expect(book.key).to.equal('/works/OL19733362W');
      cy.url().should('include', '/books/OL19733362W');
      cy.getByTestId('book-details-container').should('exist');
      cy.contains('Book details');
      cy.contains('The master and his emissary');

      expect(requestCounter).to.equal(1);
      requestCounter = 0;

      cy.getByTestId('navbar').within(($navbar) => {
        cy.wrap($navbar).get('a').click();
      });

      cy.contains('Recently viewed books');
      cy.getByTestId('recently-viewed-book')
        .should('have.length', 1)
        .contains('The master and his emissary')
        .click();
      cy.contains('Book details');
      expect(requestCounter).to.equal(0);
    });
  });

  // Image placeholder
  it('should display a placeholder image when book cover IDs are not available', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/search.json?*',
      },
      {
        fixture: 'book-details-no-image.json',
      },
    ).as('getBookDetails');

    cy.visit('/books/OL11697103W');

    cy.wait('@getBookDetails').then((interception) => {
      const book = interception.response.body.docs[0];
      expect(book.key).to.equal('/works/OL11697103W');
      cy.url().should('include', '/books/OL11697103W');
      cy.getByTestId('book-details-container').should('exist');
      cy.contains('Book details');
      cy.contains('Potted golf');

      cy.get('img')
        .should('have.attr', 'src')
        .should('not.be.empty')
        .and('contain', 'book-cover-placeholder');
    });
  });
});

describe('Book details page - error', () => {
  const retries = 6 * 2;
  // Error toast
  it('should display an error toast when getting a server error response', () => {
    cy.intercept('GET', '**/search.json?*', { forceNetworkError: true }).as(
      'getNetworkFailure',
    );

    cy.visit('/books/OL11697103W');

    for (let index = 0; index < retries; index++) {
      cy.wait('@getNetworkFailure', { timeout: 30000 });
    }

    cy.checkToastMessage('Rejected: TypeError: Failed to fetch');
  });
});
