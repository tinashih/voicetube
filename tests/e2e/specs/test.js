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

  it('Should have correct count of films after get films succeed', () => {
    // We can also mock api here to control if we want to get succeed/failed results
    cy.get('[data-qa="Content-Films"]')
      .children()
      .should('have.length', 8);

    cy.get('[data-qa="Home-SortButtonToggle-Button-publish"]')
      .should('have.class', 'is-selected');

    cy.get('[data-qa="Home-FilterButtonToggle-Button-NoLimited"]')
      .should('have.class', 'is-selected');
  });

  it('Should have correct size for each film', () => {
    cy.get('[data-qa="Content-Films"]')
      .children()
      .each(($el) => {
        const $film = $el[0];
        expect($film.clientWidth).to.equal(240);
        expect($film.clientHeight).to.equal(228);
      });
  });

  // Did not test too much cases here, but we can still test other cases such as
  // 1. After the filter button clicks, the films length and sort correct or not
  // 2. After the sort button clicks, the films is sort correct or not
  // 3. Every film should have image, duration, title, views, level and captions with correct value
  // ...etc
});
