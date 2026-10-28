describe('Compra', () => {
    beforeEach(() => {

        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

    })

        it('Adicionar a mochila no carrinho', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            cy.get('[data-test="shopping-cart-badge"]')
                .should('have.text', '1');

        })

        it('Finalizar a compra', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            cy.get('[data-test="shopping-cart-badge"]').click();
            cy.get('[data-test="checkout"]').click();
            cy.get('[data-test="firstName"]').type('Rafael');
            cy.get('[data-test="lastName"]').type('Ferrari');
            cy.get('[data-test="postalCode"]').type('09263789');
            cy.get('[data-test="continue"]').click();

            cy.get('[data-test="finish"]').click();

            cy.contains('Thank you for your order!')
            .should('be.visible');

        })

})

//cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
//cy.get('[data-test="shopping-cart-badge"]')
//cy.get('[data-test="shopping-cart-link"]')
//cy.get('[data-test="checkout"]')

//cy.get('[data-test="firstName"]')
//cy.get('[data-test="lastName"]')
//cy.get('[data-test="postalCode"]')
//cy.get('[data-test="continue"]')

//cy.get('[data-test="finish"]')

//cy.get('[data-test="secondary-header"]')