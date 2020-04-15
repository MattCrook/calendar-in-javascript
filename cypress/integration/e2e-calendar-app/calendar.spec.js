/// <reference types="cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080/");
  });

  describe("calendar renders", () => {
    it("has  title", () => {
      cy.contains("Calendar in Javascript");
    });

    it("has months", () => {
      cy.get("#months").click();
      cy.contains(".dropdown-item").click();
      and("be.visible");
    });

    it("has years", () => {
      cy.get("#years").click();
      cy.contains(".dropdown-item").click();
      and("be.visible");
    });
  });
});
