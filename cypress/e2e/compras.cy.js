describe('Compra', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('Adicionar a mochila no carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    });

    it('Finalizar a compra', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Rafael');
        cy.get('[data-test="lastName"]').type('Ferrari');
        cy.get('[data-test="postalCode"]').type('09263789');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        cy.contains('Thank you for your order!').should('be.visible');
    });

    it('Remover item do carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
    });

    it('Ordenar produtos do menor para o maior preço', () => {
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('[data-test="inventory-item-price"]').then(($prices) => {
            const prices = [...$prices].map((price) =>
                Number(price.innerText.replace('$', ''))
            );

            expect(prices).to.have.length.greaterThan(1);
            expect(prices[0]).to.equal(7.99);
            expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
        });
    });

    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.contains('Swag Labs').should('be.visible');
    });

    it('Comprando dois itens', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
        cy.get('[data-test="shopping-cart-badge"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Rafael');
        cy.get('[data-test="lastName"]').type('Ferrari');
        cy.get('[data-test="postalCode"]').type('09263789');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        cy.contains('Thank you for your order!').should('be.visible');
    });
});
