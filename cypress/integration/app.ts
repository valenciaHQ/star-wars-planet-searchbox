describe("Our first test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("https://swapi.dev/api/planets/").as("getPlanets");
    cy.intercept("https://swapi.dev/api/planets/?page=2").as("getPlanets2");
    cy.intercept("https://swapi.dev/api/planets/?page=3").as("getPlanets3");
    cy.intercept("https://swapi.dev/api/planets/?page=4").as("getPlanets4");
    cy.intercept("https://swapi.dev/api/planets/?page=5").as("getPlanets5");
    cy.intercept("https://swapi.dev/api/planets/?page=6").as("getPlanets6");
    cy.wait("@getPlanets");
    cy.wait("@getPlanets2");
    cy.wait("@getPlanets3");
    cy.wait("@getPlanets4");
    cy.wait("@getPlanets5");
    cy.wait("@getPlanets6");
  });
  context("It renders", () => {
    it("should navigates to base URL and renders", () => {
      cy.contains(/STARWARS PLANET FINDER/i);
    });
  });

  context("Searchbox", () => {
    it("should show Tatooine on mount", () => {
      cy.get("#input").should("have.value", "Tatooine");
    });

    it("should show options", () => {
      cy.get("#input").clear().type("A");
      cy.get("[data-cy='cy-options-wrapper']")
        .children()
        .should("have.length", 2);
    });

    it("should show default option and should show added option", () => {
      cy.get("#input").clear().type("Yavin IV");
      cy.get("[data-cy='cy-options-wrapper']").children().click();
      cy.get("#input").should("have.value", "Yavin IV");
      cy.get('[data-cy="planet-list"]').children().should("have.length", 2);
    });

    it.only("should show no option because its deleted", () => {
      cy.get('[data-cy="planet-list"]').children().should("have.length", 1);
      cy.get('[data-cy="planet-list"]').children().find("button").click();
      cy.get('[data-cy="planet-list"]').children().should("have.length", 0);
    });
  });
});
