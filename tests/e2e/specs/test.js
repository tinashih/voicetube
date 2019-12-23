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

  it('Should have title and values of the sort block', () => {
    cy.get('[data-qa="Home-SortButtonToggle-Title"]')
      .as('sortTitle')
      .should('be.exist')
      .and('be.visible');

    cy.get('@sortTitle')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('排序');
      });

    cy.get('[data-qa="Home-SortButtonToggle"] > .button-toggle__toggles')
      .as('sortToggles')
      .children()
      .should('have.length', 3);

    cy.get('@sortToggles')
      .find('[data-qa="Home-SortButtonToggle-Button-publish"]')
      .should('be.exist')
      .and('be.visible')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('發布時間');
      });

    cy.get('@sortToggles')
      .find('[data-qa="Home-SortButtonToggle-Button-views"]')
      .should('be.exist')
      .and('be.visible')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('觀看次數');
      });

    cy.get('@sortToggles')
      .find('[data-qa="Home-SortButtonToggle-Button-collectCount"]')
      .should('be.exist')
      .and('be.visible')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('收藏次數');
      });
  });

  it('Should have title and values of the filter block', () => {
    cy.get('[data-qa="Home-FilterButtonToggle-Title"]')
      .as('filterTitle')
      .should('be.exist')
      .and('be.visible');

    cy.get('@filterTitle')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('長度');
      });

    cy.get('[data-qa="Home-FilterButtonToggle"] > .button-toggle__toggles')
      .as('filterToggles')
      .children()
      .should('have.length', 4);

    cy.get('@filterToggles')
      .find('[data-qa="Home-FilterButtonToggle-Button-NoLimited"]')
      .should('be.exist')
      .and('be.visible')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('不限');
      });

    cy.get('@filterToggles')
      .find('[data-qa="Home-FilterButtonToggle-Button-UnderFourMinutes"]')
      .should('be.exist')
      .and('be.visible')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('4分鐘以下');
      });

    cy.get('@filterToggles')
      .find('[data-qa="Home-FilterButtonToggle-Button-FiveToTenMinutes"]')
      .should('be.exist')
      .and('be.visible')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('5 - 10分鐘');
      });

    cy.get('@filterToggles')
      .find('[data-qa="Home-FilterButtonToggle-Button-OverTenMinutes"]')
      .should('be.exist')
      .and('be.visible')
      .then($span => $span.text())
      .normalizeText()
      .then((text) => {
        expect(text).to.eql('超過10分鐘');
      });
  });
});
