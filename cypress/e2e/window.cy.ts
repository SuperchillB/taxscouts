/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should get the global window object', () => {
    cy.window().should('have.property', 'top');
  });

  it('should get the document object', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it('should have the right title', () => {
    cy.title().should('include', 'My Library');
  });
});
