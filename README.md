# Testes E2E com Cypress — SauceDemo

[![Cypress E2E](https://github.com/r1moreira9/cypressUdemy/actions/workflows/cypress.yml/badge.svg)](https://github.com/r1moreira9/cypressUdemy/actions/workflows/cypress.yml)

Projeto de automação de testes end-to-end (E2E) desenvolvido com Cypress e JavaScript. A suíte valida os principais fluxos de login, catálogo, carrinho e checkout do site público de demonstração [SauceDemo](https://www.saucedemo.com/).

> Este repositório contém testes automatizados para fins de estudo e portfólio; não contém o código da aplicação SauceDemo.

## Cenários cobertos

| Área | Cenário | Validação principal |
|---|---|---|
| Login | Acessar com usuário e senha válidos | A página de produtos é exibida |
| Login | Acessar com usuário bloqueado | É exibida uma mensagem informando que o usuário está bloqueado |
| Login | Informar senha inválida | É exibida uma mensagem de credenciais inválidas |
| Login | Enviar os campos vazios | É exibida a mensagem de usuário obrigatório |
| Login | Informar usuário sem senha | É exibida a mensagem de senha obrigatória |
| Carrinho | Adicionar a mochila | O indicador do carrinho mostra 1 item |
| Carrinho | Remover a mochila | O indicador do carrinho deixa de ser exibido |
| Catálogo | Ordenar produtos do menor para o maior preço | Os preços aparecem em ordem crescente e o menor é `$7.99` |
| Compra | Finalizar a compra da mochila | A confirmação do pedido é exibida |
| Compra | Finalizar a compra de dois produtos | O carrinho mostra 2 itens e a confirmação do pedido é exibida |
| Sessão | Fazer logout | A aplicação retorna à tela de login |

## Tecnologias

- JavaScript
- Cypress 16
- Node.js e npm
- GitHub Actions para integração contínua (CI)

## Pré-requisitos

- Node.js 22 ou superior e npm
- Acesso à internet e ao site SauceDemo

## Instalação e execução local

Clone o repositório e instale as dependências usando o lockfile:

```bash
git clone https://github.com/r1moreira9/cypressUdemy.git
cd cypressUdemy
npm ci
```

Execute toda a suíte em modo headless:

```bash
npm test
```

Abra a interface do Cypress para selecionar e executar os testes interativamente:

```bash
npm run cy:open
```

O comando `npm test` executa `cypress run`, usando Electron headless por padrão. Também é possível executar com Chrome, se estiver instalado:

```bash
npm run cy:run:ci
```

## Integração contínua

O workflow em `.github/workflows/cypress.yml` instala as dependências com `npm ci` e executa `npm run cy:run:ci` no Chrome em um runner Ubuntu com Node.js 22. Ele é acionado automaticamente em cada `push` e `pull request`, cancela execuções antigas da mesma branch e não requer secrets adicionais. Se um teste falhar, as screenshots ficam disponíveis como artefato da execução por sete dias.

Para acompanhar uma execução, acesse a aba **Actions** do repositório no GitHub. A execução depende de o SauceDemo estar acessível; indisponibilidade ou alterações no serviço externo podem afetar os testes.

Este repositório não contém uma aplicação própria para publicar. Por isso, o pipeline foca em CI — executar e validar os testes automaticamente — sem uma etapa de deploy artificial.

## Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/              # Especificações E2E
│   ├── fixtures/         # Dados de teste
│   └── support/          # Configuração e comandos compartilhados
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```
