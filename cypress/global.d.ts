/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(
        dataTestAttribute: string,
        args?: any,
      ): Chainable<JQuery<HTMLElement>>;
      checkToastMessage(message: string);
      closeAllAlertMessages();
    }
  }
}
