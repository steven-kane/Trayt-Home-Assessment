describe('Home', () => {
  it('should navigate to the Second Page when \'Learn More\' button is clicked', () => {
    // Visit the Landing Page
    cy.visit('/');

    // Verify the page content
    cy.contains('Welcome to Bank of Trayt').should('exist');
    cy.contains(
      'Initiate a new Direct Deposit to earn 5% for 36 Months!',
    ).should('exist');

    // Click the 'Learn More' button
    cy.get('button').contains('Learn More').click();

    // Verify that the URL has changed to the Second Page
    cy.url().should('include', '/deposit-enrollment-from');
  });
});

describe('DepositEnrollmentForm', () => {
  beforeEach(() => {
    // Visit the Second Page before each test
    cy.visit('/deposit-enrollment-from');
  });

  it('should allow the user to fill the form and submit', () => {
    // Fill the form
    cy.get('input[name="accountNumber"]').type('12345678');
    cy.get('input[name="routingNumber"]').type('123456789');
    cy.get('input[name="amount"]').type('1000');
    cy.get('input[name="frequency"]')
      .get('.MuiSelect-select')
      .click({ force: true });
    cy.get('li[data-value="twicePerMonth"]').click();
    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the user is navigated to the Third Page
    cy.url().should('include', '/interest-calculator');
  });

  it('should show error messages for invalid inputs', () => {
    // Submit the form without filling it
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    // Assert that error messages are displayed for each input field
    cy.contains('Account number is required').should('exist');
    cy.contains('Routing number is required').should('exist');
    cy.contains('Amount is required').should('exist');
    cy.contains('Frequency is required').should('exist');
  });
});

describe('InterestCalculator', () => {
  beforeEach(() => {
    // Visit the Second Page and fill out the form before each test
    cy.visit('/deposit-enrollment-from');
    // Fill the form
    cy.get('input[name="accountNumber"]').type('12345678');
    cy.get('input[name="routingNumber"]').type('123456789');
    cy.get('input[name="amount"]').type('1000');
    cy.get('input[name="frequency"]')
      .get('.MuiSelect-select')
      .click({ force: true });
    cy.get('li[data-value="twicePerMonth"]').click();
    // Submit the form
    cy.get('button[type="submit"]').click();
    // Wait for the navigation to the Third Page
    cy.url().should('include', '/interest-calculator');
  });

  it('calculates interest correctly for the first 36 months', () => {
    cy.get('.MuiDayCalendar-weekContainer')
      .eq(0)
      .within(() => {
        // Click the first element inside MuiDayCalendar-weekContainer
        cy.get('button[role="gridcell"]').first().click();
      });
    // Click the 'Calculate' button on the Third Page
    cy.get('button').contains('Calculate').click();

    // Should contains a calculated interest value
    cy.get('.MuiTypography-h1')
      .contains(/\$\s*\d+(\.\d{2})?/)
      .should('exist');
  });
});
