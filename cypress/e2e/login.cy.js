describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Logar com um usuário e senha válidos', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.contains('Products').should('be.visible');
    });

    it('mostrar o erro para o usuário bloqueado', () => {
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.get('[data-test="error"]')
            .should('contain', 'locked out');
    });

    it('mostrar o erro ao informar uma senha inválida', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('123456789');
        cy.get('#login-button').click();

        cy.get('[data-test="error"]')
            .should('contain', 'not match');
    });

    it('mostrar o erro ao tentar entrar com os campos vazios', () => {
        cy.get('#login-button').click();
        cy.get('[data-test="error"]')
            .should('contain', 'Username is required');
    });

    it('mostrar o erro ao tentar entrar sem informar a senha', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]')
            .should('contain', 'Password is required');
    });
});
