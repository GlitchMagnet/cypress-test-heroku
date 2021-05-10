class Login {

    loginHeading()
    {
        return cy.get('h2');
    }

    loginSubheading()
    {
        return cy.get('.subheader');
    }

    usernameLabel()
    {
        return cy.get('[for="username"]');
    }

    usernameInput()
    {
        return cy.get('#username');
    }

    passwordLabel()
    {
        return cy.get('[for="password"]');
    }

    passwordInput()
    {
        return cy.get('#password');
    }

    loginButton()
    {
        return cy.get('[type="submit"]');
    }

    errorMessage()
    {
        return cy.get('.error');
    }

    // Secure page once logged in, techincally should go in separate page object, but putting here for simplicity for now
    
    logoutButton()
    {
        return cy.get('[href="/logout"]');
    }

    successMessage()
    {
        return cy.get('.success');
    }

    secureHeading()
    {
        return cy.get('h2');
    }

    secureSubheading()
    {
        return cy.get('.subheader');
    }
}

export default new Login();