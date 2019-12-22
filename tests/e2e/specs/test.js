describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have blocks filter and films and divider', () => {
    cy.get('[data-qa="Content-Filters"]')
      .as('filters')
      .should('be.exist')
      .and('be.visible');

    cy.get('[data-qa="Content-Divider"]')
      .as('divider')
      .should('be.exist')
      .and('be.visible');

    cy.get('[data-qa="Content-Films"]')
      .as('films')
      .should('be.exist')
      .and('be.visible');
  });
});
