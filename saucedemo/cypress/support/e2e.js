import "./commands";

Cypress.Commands.add("unregisterServiceWorkers", () => {
  if (!window.navigator || !navigator.serviceWorker) {
    return;
  }

  return navigator.serviceWorker.getRegistrations().then((registrations) => {
    return Promise.all(
      registrations.map((registration) => registration.unregister())
    );
  });
});

beforeEach(() => {
  cy.unregisterServiceWorkers();
});
