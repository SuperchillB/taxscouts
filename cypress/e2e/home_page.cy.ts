/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/search.json?*',
      },
      {
        fixture: 'book-details.json',
      },
    ).as('getBookDetails');

    cy.visit('/');
  });

  it('should display an empty state illustration with some text', () => {
    cy.contains('Recently viewed books');
    cy.getByTestId('recently-viewed-empty-state').should('exist');
    cy.contains("It's lonely out here. Start browsing books.");
  });

  it('should display a navbar with a single link which redirects to the homepage', () => {
    cy.getByTestId('navbar').should('exist');
    cy.getByTestId('book-searchbar').should('exist');

    cy.visit('/books/OL24557376W');

    cy.contains('Book details');
    cy.getByTestId('navbar').get('a').click();
    cy.contains('Recently viewed books');
  });

  it('should display recently viewed books when I visit a book details url and navigate back to the home page', () => {
    cy.contains('Recently viewed books');

    cy.visit('/books/OL19733362W');

    cy.wait('@getBookDetails').then((interception) => {
      expect(interception.response.body.docs[0].key).to.equal(
        '/works/OL19733362W',
      );
      cy.url().should('include', '/books/OL19733362W');
      cy.contains('The master and his emissary');
      cy.getByTestId('navbar').within(($navbar) => {
        cy.wrap($navbar).get('a').click();
      });

      cy.contains('Recently viewed books');
      cy.getByTestId('recently-viewed-book')
        .should('have.length', 1)
        .contains('The master and his emissary');
    });
  });
});
