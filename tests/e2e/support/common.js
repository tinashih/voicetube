/* global Cypress */

Cypress.Commands.add('normalizeText', { prevSubject: true }, (str = '') => str.replace(/\n/g, '').trim());
