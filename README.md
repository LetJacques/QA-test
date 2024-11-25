# QA Testing BeTalent - Teste Prático

Este repositório contém a documentação e os resultados dos testes realizados para o **Teste Prático QA Testing BeTalent**. O teste abrange tanto a **UI Testing** quanto a **API Testing**, utilizando ferramentas adequadas para garantir a qualidade e funcionalidade da plataforma Sauce Demo e da API Restful-Booker.

## Sumário

1. [Visão Geral](#visão-geral)
2. [UI Testing - Sauce Demo](#ui-testing---sauce-demo)
3. [API Testing - Restful-Booker](#api-testing---restful-booker)
4. [Testes Extras](#testes-extras)
5. [Como Rodar](#como-rodar)
6. [Relatórios de Testes](#relatórios-de-testes)
7. [Conclusão](#conclusão)

## Visão Geral

O objetivo deste projeto foi realizar testes manuais e automatizados, tanto de **UI** quanto de **API**, para garantir que as plataformas Sauce Demo e Restful-Booker atendam aos requisitos funcionais e de qualidade antes de serem lançadas ou integradas. Todos os testes foram documentados e as descobertas, como bugs e sugestões de melhorias, foram incluídas.

## UI Testing - Sauce Demo

Para a plataforma Sauce Demo, foram realizados testes manuais e automatizados para cobrir os seguintes cenários:

- **Login** com diferentes tipos de usuários.
- **Ordenação e filtragem de produtos**.
- **Fluxo completo de compra** (do carrinho até a finalização).
- **Remoção de itens do carrinho**.
- **Navegação entre páginas**.
- **Logout**.

Além disso, testes de **responsividade** e **acessibilidade** foram executados, sendo que o relatório de acessibilidade foi gerado com a ferramenta **Axe**, sem identificar problemas críticos.

### Resultados dos Testes

Os testes realizados mostraram que os principais fluxos da plataforma funcionam como esperado. A documentação em **Markdown** está disponível no arquivo `ui-testing.md`, onde todos os casos de teste, resultados e sugestões de melhorias de UX/UI estão listados.

## API Testing - Restful-Booker

Para a API do Restful-Booker, os seguintes cenários foram testados:

- **Autenticação** (geração e tentativa com credenciais inválidas).
- **Gestão de reservas** (criar, buscar, listar, atualizar e deletar).
- **Filtros e buscas** (por nome e datas de check-in e check-out).

Todos os testes foram realizados utilizando a ferramenta **Postman**, com os requests organizados em uma coleção. A documentação dos resultados está disponível no arquivo `api-testing.md`.

### Resultados dos Testes

Todos os testes de API foram executados com sucesso, exceto por um pequeno bug relacionado ao formato de data na busca por reservas. Os detalhes dos testes e bugs encontrados estão listados no arquivo `api-testing.md`.

## Testes Extras

Além dos cenários principais, foram realizados testes de **acessibilidade** utilizando a ferramenta Axe. Nenhum problema grave foi encontrado. O relatório gerado foi incluído no repositório como arquivos JSON.

## Como Rodar

### UI Testing

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/qa-testing-betalent.git
   ```
2. Instale as dependências:
 ```bash
   npm install
   ```
3. Execute os testes com Cypress:
    ```bash
   npx cypress open
   ```
4. Selecione os testes desejados na interface do Cypress.


### API Testing

1. Importe a coleção do Postman.
2. Configure as variáveis de ambiente para a API Restful-Booker.
3. Execute os testes e verifique os resultados.


### Relatórios de Testes
Os relatórios dos testes realizados estão disponíveis nos seguintes arquivos:

`ui-testing.md`: Contém o plano de testes, resultados e sugestões para UI Testing.
`api-testing.md`: Contém os testes realizados na API, resultados e bugs encontrados.

Os relatórios de acessibilidade gerados pela ferramenta Axe estão incluídos como arquivos JSON no diretório `relatorios/`.

## Conclusão
Todos os cenários críticos de UI e API foram testados, e a documentação foi organizada de acordo com os requisitos. Não foram encontrados problemas graves, mas algumas melhorias de UX/UI foram sugeridas, além de uma sugestão de automação para os testes de UI.
