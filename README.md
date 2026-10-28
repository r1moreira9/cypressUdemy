# Automação E2E com Cypress — SauceDemo

Projeto de estudo em andamento para praticar automação de testes end-to-end (E2E) com Cypress e JavaScript. Os testes exercitam fluxos de login e compra no site público de demonstração [SauceDemo](https://www.saucedemo.com/).

> **Escopo:** este repositório contém testes automatizados para fins de aprendizado; não é o código da aplicação SauceDemo.

## Cenários automatizados

| Área | Cenário | Resultado esperado |
|---|---|---|
| Login | Acessar com usuário válido | A página de produtos é exibida |
| Login | Tentar acessar com usuário bloqueado | Uma mensagem informa que o usuário está bloqueado |
| Carrinho | Adicionar a mochila ao carrinho | O indicador do carrinho mostra um item |
| Compra | Finalizar a compra da mochila | A confirmação do pedido é exibida |

## Tecnologias

- JavaScript
- Cypress 16.2
- Node.js e npm

## Pré-requisitos

- Node.js instalado (preferencialmente uma versão LTS) e npm
- Acesso à internet e ao site SauceDemo durante a execução dos testes

## Como executar

Clone o repositório e instale as dependências:

```bash
git clone <URL-DO-REPOSITORIO>
cd CypressUdemy
npm install
```

Execute os testes em modo headless:

```bash
npm test
```

Abra o Cypress para selecionar e executar os testes pela interface:

```bash
npx cypress open
```

O comando `npm test` executa `cypress run`, que usa o navegador Electron headless por padrão. Para executar em outro navegador compatível instalado na máquina, por exemplo Chrome:

```bash
npx cypress run --browser chrome
```

## Estrutura do projeto

```text
 cypress/
 ├── e2e/          # Especificações de testes E2E
 ├── fixtures/     # Dados de teste
 ├── support/      # Configuração e comandos compartilhados
 └── downloads/    # Arquivos baixados durante os testes (não versionados)
 cypress.config.js # Configuração do Cypress
 package.json      # Dependências e comandos npm
```

## Resultado da última validação

A suíte foi executada com `npm test`: **4 testes aprovados, 0 falhas**, distribuídos em 2 arquivos de especificação. A execução depende da disponibilidade do SauceDemo e pode ser afetada por mudanças ou instabilidade no serviço externo.

O Cypress 16.2.0 exibiu um aviso de que o Electron está depreciado como navegador de teste e poderá ser removido em uma versão futura. O comando para Chrome acima é uma alternativa, desde que o navegador esteja instalado.

## Próximas melhorias

Este projeto está em evolução como parte dos estudos de Cypress. Para ampliar a cobertura e demonstrar outras práticas de QA, os próximos passos podem incluir:

- Validar campos obrigatórios e mensagens de erro no checkout.
- Cobrir remoção de produtos, carrinho vazio e logout.
- Padronizar seletores com atributos `data-test` e reduzir dependência de seletores visuais.
- Extrair o login para um comando reutilizável e organizar os dados de teste.
- Adicionar evidências de execução, como screenshots ou relatórios.
- Configurar execução automatizada no GitHub Actions.

As credenciais utilizadas são as contas públicas de demonstração do SauceDemo; não use credenciais pessoais neste projeto.
