import Login from '../../support/PageObjects/Login.page'
// import the page object, using this model makes our test structure way more robust and maintainable

describe('Test App Login Functionality', () => {

    beforeEach(function () {

        // Go to back to base url before each test
        cy.visit(Cypress.env('baseUrl'));

        // Load dataStore to be accessed with this.data
        // storing actuals that we will assert against in the dataStore makes our tests more readable and resilient
        cy.fixture('dataStore').then((data) => {
            this.data = data
        })

    })

    afterEach(function () {     
        
        // Logout after each test to return to initial state and assert user messaging
        Login.logoutButton().click();
        Login.successMessage().should('contain.text',this.data.signOutSuccess);

        })

    it('Sign in with valid credentials, hitting enter', function () {

        // Assert UI Text on initial page state
        Login.loginHeading().should('contain.text',this.data.loginHeading); 
        Login.loginSubheading().should('contain.text',this.data.loginSubheading);
        Login.usernameLabel().should('contain.text',this.data.usernameLabel);
        Login.passwordLabel().should('contain.text',this.data.passwordLabel); // TODO: can package these up into custom commands for more readability

        // Have user input credentials and submit with enter key
        Login.usernameInput().type(this.data.username);
        Login.passwordInput().type(this.data.password).type('{enter}');

        // Assert UI on secure page
        Login.successMessage().should('contain.text',this.data.signInSuccess);
        Login.secureHeading().should('contain.text',this.data.secureHeading);
        Login.secureSubheading().should('contain.text',this.data.secureSubheading); // TODO: can package these up into custom commands for more readability

    })

    it('Sign in with invalid username, assert error, then login correctly', function () {

        // Assert UI Text on initial page state
        Login.loginHeading().should('contain.text',this.data.loginHeading);
        Login.loginSubheading().should('contain.text',this.data.loginSubheading);
        Login.usernameLabel().should('contain.text',this.data.usernameLabel);
        Login.passwordLabel().should('contain.text',this.data.passwordLabel);

        // Have user input invalid username with valid password and submit with enter key
        Login.usernameInput().type(this.data.invalidUsername);
        Login.passwordInput().type(this.data.password).type('{enter}');

        // Assert error messaging
        Login.errorMessage().should('contain.text',this.data.usernameError);

        // Now sign in with correct credentials and assert
        Login.usernameInput().type(this.data.username);
        Login.passwordInput().type(this.data.password).type('{enter}');
        
        Login.successMessage().should('contain.text',this.data.signInSuccess);
        Login.secureHeading().should('contain.text',this.data.secureHeading);
        Login.secureSubheading().should('contain.text',this.data.secureSubheading);

    })

    it('Sign in with invalid password, assert error, then login correctly', function () {

        // Assert UI Text on initial page state
        Login.loginHeading().should('contain.text',this.data.loginHeading);
        Login.loginSubheading().should('contain.text',this.data.loginSubheading);
        Login.usernameLabel().should('contain.text',this.data.usernameLabel);
        Login.passwordLabel().should('contain.text',this.data.passwordLabel);

        // Have user input invalid password, valid username and submit with enter key
        Login.usernameInput().type(this.data.username);
        Login.passwordInput().type(this.data.invalidPassword).type('{enter}');

        // Assert error messaging
        Login.errorMessage().should('contain.text',this.data.passwordError);

        // Now sign in with correct credentials and assert
        Login.usernameInput().type(this.data.username);
        Login.passwordInput().type(this.data.password).type('{enter}');
        
        Login.successMessage().should('contain.text',this.data.signInSuccess);
        Login.secureHeading().should('contain.text',this.data.secureHeading);
        Login.secureSubheading().should('contain.text',this.data.secureSubheading);

    })

    it('Sign in with valid credentials and test clicking Login button', function () {

        // Assert UI Text on initial page state
        Login.loginHeading().should('contain.text',this.data.loginHeading);
        Login.loginSubheading().should('contain.text',this.data.loginSubheading);
        Login.usernameLabel().should('contain.text',this.data.usernameLabel);
        Login.passwordLabel().should('contain.text',this.data.passwordLabel);

        // Have user input credentials and submit with clicking the login button
        Login.usernameInput().type(this.data.username);
        Login.passwordInput().type(this.data.password);
        Login.loginButton().click();

        // Assert UI on secure page
        Login.successMessage().should('contain.text',this.data.signInSuccess);
        Login.secureHeading().should('contain.text',this.data.secureHeading);
        Login.secureSubheading().should('contain.text',this.data.secureSubheading);

    })

})