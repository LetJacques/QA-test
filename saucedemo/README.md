# Plano de Testes - Sauce Demo E-commerce

## 1. Introdução

O objetivo deste documento é descrever o plano de testes realizado para a plataforma de e-commerce **Sauce Demo** (https://www.saucedemo.com). O teste abrange os principais fluxos da aplicação, como login, navegação, compra, e funcionalidades relacionadas ao carrinho e checkout.

## 2. Casos de Teste

### 2.1 Login com Diferentes Tipos de Usuários

- **Objetivo**: Verificar se os usuários conseguem fazer login com diferentes tipos de credenciais.
- **Passos**:
  1. Acessar o site.
  2. Inserir as credenciais de login (usuário padrão e inválido).
  3. Verificar se o usuário é redirecionado para a página principal após login com credenciais válidas.
  4. Verificar se uma mensagem de erro é exibida ao tentar fazer login com credenciais inválidas.
- **Resultado Esperado**:
  - Login bem-sucedido redireciona para a página principal.
  - Login com erro exibe mensagem de erro.

### 2.2 Ordenação e Filtragem de Produtos

- **Objetivo**: Testar as funcionalidades de ordenação e filtragem de produtos.
- **Passos**:
  1. Acessar a lista de produtos.
  2. Ordenar os produtos por preço (crescente e decrescente).
  3. Filtrar produtos por categoria.
  4. Verificar se os produtos são apresentados corretamente.
- **Resultado Esperado**:
  - A ordenação e filtragem devem refletir as escolhas do usuário.

### 2.3 Fluxo Completo de Compra

- **Objetivo**: Verificar se o fluxo de compra está funcionando corretamente.
- **Passos**:
  1. Selecionar um produto e adicionar ao carrinho.
  2. Acessar o carrinho e verificar se o produto está presente.
  3. Finalizar a compra.
  4. Verificar se o pedido é registrado corretamente.
- **Resultado Esperado**:
  - O produto é adicionado ao carrinho e a compra é finalizada com sucesso.

### 2.4 Remoção de Itens do Carrinho

- **Objetivo**: Verificar se o sistema permite remover itens do carrinho corretamente.
- **Passos**:
  1. Adicionar um ou mais produtos ao carrinho.
  2. Remover um item do carrinho.
  3. Verificar se o item foi removido.
- **Resultado Esperado**:
  - O item é removido corretamente e o carrinho é atualizado.

### 2.5 Navegação entre Páginas

- **Objetivo**: Testar a navegação entre as diferentes páginas da plataforma.
- **Passos**:
  1. Acessar a página inicial.
  2. Navegar para diferentes páginas, como "Produtos", "Carrinho", "Login", "Checkout".
  3. Verificar se as páginas são carregadas corretamente.
- **Resultado Esperado**:
  - Todas as páginas devem carregar corretamente sem erros.

### 2.6 Logout

- **Objetivo**: Verificar se o logout funciona corretamente.
- **Passos**:
  1. Realizar o login com credenciais válidas.
  2. Clicar na opção de logout.
  3. Verificar se o usuário é redirecionado para a página de login.
- **Resultado Esperado**:
  - O usuário é deslogado corretamente e redirecionado para a página de login.

### 2.7 Títulos

- **Objetivo**: Verificar a correta exibição e formatação dos títulos das páginas do site.
- **Passos**:
  1. Acessar cada página da aplicação.
  2. Identificar os títulos principais.
  3. Validar se os textos dos títulos estão corretos e alinhados com o propósito da página.
- **Resultado Esperado**: Os títulos devem ser exibidos corretamente, com formatação consistente e conteúdo apropriado.

### 2.8 Logos e Imagens

- **Objetivo**: Validar a presença e exibição correta do logo e outras imagens no site.
- **Passos**:
  1. Acessar as páginas principais.
  2. Verificar a presença do logo e das imagens nos locais designados.
  3. Validar se as imagens estão carregando corretamente e sem distorções.
- **Resultado Esperado**: Todas as imagens devem ser exibidas corretamente e estar relacionadas ao conteúdo da página.

### 2.9 Header e Footer

- **Objetivo**: Verificar a presença e funcionamento adequado dos elementos do header e footer.
- **Passos**:
  1. Acessar as páginas principais do site.
  2. Verificar se o header e footer estão presentes em todas as páginas.
  3. Testar os links e funcionalidades desses elementos.
- **Resultado Esperado**: O header e footer devem ser exibidos corretamente em todas as páginas, e os links/funções devem funcionar conforme esperado.

### 2.10 Menu

- **Objetivo**: Validar se o menu está presente na página e se seu conteúdo está correto.
- **Passos**:
  1. Acessar as páginas com menu.
  2. Verificar a presença e exibição do menu.
  3. Validar o conteúdo dos itens do menu e sua navegabilidade.
- **Resultado Esperado**: O menu deve exibir todos os itens corretamente e permitir a navegação esperada.

### 2.11 Ícones

- **Objetivo**: Verificar a exibição e funcionamento adequado de ícones em diferentes partes do site.
- **Passos**:
  1. Identificar todos os ícones exibidos nas páginas.
  2. Validar se os ícones são exibidos corretamente.
  3. Testar as ações associadas aos ícones.
- **Resultado Esperado**: Todos os ícones devem ser exibidos corretamente e funcionar conforme esperado.

## 3. Resultados dos Testes Executados

### 3.1 Resultados de Login

#### Login com Credenciais Válidas:

- **Credenciais**: Username: standard_user, Password: secret_sauce
- **Resultado Esperado**: O usuário é redirecionado para a página de produtos.
- **Resultado Obtido**: Passou. O usuário foi redirecionado corretamente para a página principal de produtos, onde todos são listados corretamente

#### Login com Credenciais Inválidas:

- **Credenciais**: Username: invalid_user, Password: invalid_password
- **Resultado Esperado**: O sistema exibe uma mensagem de erro.
- **Resultado Obtido**: Passou, mas com falha de UX/UI. Uma mensagem de erro foi exibida corretamente: "Epic sadface: Username and password do not match any user in this service".
- **Bug Reportado**: Problema de UX/UI. A mensagem de erro está cortada devido ao container de erro (error-message-container) ter uma altura fixa insuficiente para acomodar o texto completo. Isso pode afetar a experiência do usuário, dificultando a leitura do erro.
- **Sugestões na correção**: Ajuste na Altura do Container: O estilo do container de erro deve ser modificado para garantir que a altura seja automática (height: auto) ou que tenha uma altura mínima maior (ex: min-height: 50px) para garantir que a mensagem seja visualizada completamente.

#### Login com Usuário Bloqueado:

- **Credenciais**: Username: locked_out_user, Password: secret_sauce
- **Resultado Esperado**: O sistema exibe uma mensagem indicando que a conta está bloqueada.
- **Resultado Obtido**: Passou. A mensagem "Epic sadface: Sorry, this user has been locked out." foi exibida corretamente.

#### Login com Usuário de Problema (Problem User):

- **Credenciais**: Username: problem_user, Password: secret_sauce
- **Resultado Esperado**: O usuário consegue fazer login com sucesso e é redirecionado para a página de produtos. O problema com o usuário pode ser refletido no comportamento visual.
- **Resultado Obtido**: Passou, mas houve problemas visuais na página de produtos: todas as imagens dos produtos estavam incorretas (mesma imagem para produtos diferentes), o que impacta a experiência do usuário.

#### Login com Usuário de Glitch de Performance (Performance Glitch User)

- **Credenciais**: Username: performance_glitch_user, Password: secret_sauce
- **Resultado Esperado**: O usuário consegue fazer login com sucesso, mas pode perceber um pequeno atraso ou uma falha visual devido ao "glitch" de performance.
- **Resultado Obtido**: Passou. O login foi bem-sucedido, mas foi notado um atraso ou falha temporária na interface, conforme o esperado devido ao "glitch".

#### Login com Usuário com Erro (Error User)

- **Credenciais**: Username: error_user, Password: secret_sauce
- **Resultado Esperado**: O sistema exibe uma mensagem de erro, pois o usuário não está registrado ou suas credenciais são inválidas.
- **Resultado Obtido**: Falhou. O usuário conseguiu fazer login normalmente, sem nenhuma mensagem de erro, e foi redirecionado para a página de produtos, apesar de as credenciais serem inválidas. Não houve demora ou problemas visuais.
- **Bug Encontrado**: O sistema permitiu o login com credenciais inválidas, o que é um comportamento incorreto. O correto seria exibir uma mensagem de erro indicando que o usuário não foi autenticado.
- **Sugestões de Correção**: Garantir que o sistema valide corretamente as credenciais de login e exiba uma mensagem de erro adequada em caso de falha na autenticação.

### Login com Usuário Visual

- **Credenciais**: Username: visual_user, Password: secret_sauce
- **Resultado Esperado**: O login deve ser bem-sucedido, mas na interface visual podem haver erros.
- **Resultado Obtido**: Passou. O login foi bem-sucedido, mas há erros visuais aparentes, há imagens que não correspondem ao título dos produtos sendo vendidos, como esperado.

### 3.2 Resultados de Ordenação e Filtragem

- **Ordenação por ordem alfabética (A-Z)**: Passou
- **Ordenação por ordem alfabética (Z-A)**: Passou
- **Filtragem por preço (mais alto - mais baixo)**: Passou
- **Filtragem por preço (mais baixo - mais alto)**: Passou

### 3.3 Resultados do Fluxo Completo de Compra

- **Adição de produto ao carrinho**: Passou. Ao clicar no botão de adicionar, o produto é corretamente enviado para o carrinho, e o número no ícone do carrinho é incrementado, indicando a inclusão do item. No entanto, foi observado que atualmente só é possível adicionar uma unidade de cada produto ao carrinho, sem a opção de aumentar a quantidade de unidades do mesmo item diretamente. Isso pode limitar a experiência do usuário caso ele deseje comprar várias unidades de um mesmo produto.
  **Sugestão de melhoria**: Implementar uma funcionalidade que permita o ajuste da quantidade de unidades de cada produto diretamente no carrinho, com botões ou campos de incremento/decremento.
- **Finalização da compra**: Falhou. Apesar de o sistema funcionar normalmente ao finalizar uma compra com produtos no carrinho, foi identificado que o sistema permite realizar o checkout mesmo sem nenhum produto no carrinho, seguindo todo o fluxo de compra até a confirmação final.
  **Observação**: Durante o checkout com o carrinho vazio, as informações exibidas na descrição de compra incluem: Item total: $0; Tax: $0; Total: $0.00. Esse comportamento gera uma inconsistência, permitindo a confirmação de compras inválidas.
  **Impacto**: Esse comportamento pode gerar confusão para o usuário e permitir pedidos inválidos ou inconsistentes no sistema.
  **Sugestão de correção**: Adicionar uma validação no fluxo de checkout que impeça a continuidade do processo caso o carrinho esteja vazio, exibindo uma mensagem de erro apropriada como "Adicione produtos ao carrinho antes de continuar".

### 3.4 Resultados de Remoção de Itens do Carrinho

- **Remoção de item**: Passou. Ao clicar no botão de remover, o produto é corretamente excluído da lista do carrinho, e o número exibido no ícone do carrinho é atualizado para refletir a nova quantidade de itens. O sistema responde de forma eficiente, garantindo que a lista do carrinho seja sincronizada com as ações do usuário.

### 3.5 Resultados de Navegação

- **Navegação entre páginas**: Passou. Todas as páginas carregam corretamente sem erros.

### 3.6 Resultados de Logout

- **Logout bem-sucedido**: Passou. Logout realizado com sucesso em todas as sessões de login.

### 3.7 Títulos

## 4. Sugestões de Melhoria de UX/UI

- **Melhoria 1**:
- **Melhoria 2**:
- **Melhoria 3**:

## 5. Lista de Bugs Encontrados

### Bug 1: Mensagem de Erro Cortada no Login

- **Descrição**: A mensagem de erro exibida ao tentar logar com credenciais inválidas está sendo cortada.
- **Passos para Reproduzir**:
  1. Acesse a página de login.
  2. Insira as credenciais inválidas: Username: invalid_user, Password: invalid_password.
  3. Clique no botão "Login".
- **Resultado Esperado**: A mensagem de erro completa é exibida.
- **Resultado Obtido**: A mensagem de erro está cortada, dificultando a leitura.
- **Sugestões de Correção**: Aumentar a altura do `error-message-container` para garantir que a mensagem seja completamente visível.
  ![Captura de Tela: Mensagem de Erro Cortada](./Image/login_height_bug.png)

  ### Bug 2: Login com Credenciais Inválidas (Error User)

- **Descrição**: O sistema permitiu o login com credenciais inválidas, o que não deveria ocorrer.
- **Passos para Reproduzir**:
  1. Acesse a página de login.
  2. Insira as credenciais inválidas: Username: error_user, Password: secret_sauce.
  3. Clique no botão "Login".
- **Resultado Esperado**: O sistema deve exibir uma mensagem de erro informando que as credenciais estão incorretas.
- **Resultado Obtido**: O usuário foi autenticado e redirecionado para a página de produtos, apesar das credenciais inválidas.
- **Sugestões de Correção**: Garantir que o sistema valide corretamente as credenciais de login e exiba uma mensagem de erro adequada quando necessário.

### Bug 3: Checkout Permitido com Carrinho Vazio

- **Descrição**: O sistema permite realizar o checkout mesmo sem nenhum produto no carrinho.
- **Passos para Reproduzir**:
  1. Acesse o site e faça login.
  2. Navegue para o carrinho sem adicionar nenhum produto.
  3. Clique em "Checkout".
  4. Siga todo o fluxo até a confirmação final.
- **Resultado Esperado**: O sistema deveria exibir uma mensagem de erro informando que o carrinho está vazio, impedindo o checkout.
- **Resultado Obtido**: O checkout é realizado normalmente, exibindo as informações de compra com valores zerados:
  **Item total**: $0
  **Tax**: $0
  **Total**: $0.00
- **Sugestões de Correção**: Adicionar uma validação no fluxo de checkout para impedir a continuidade do processo caso o carrinho esteja vazio. Exibir uma mensagem de erro como "Adicione produtos ao carrinho antes de continuar".
  ![Captura de Tela: Checkout sem produtos](./Image/checkout_bug.png)

## 6. Análise de Riscos

- **Risco 1**: A falta de visibilidade de botões importantes em dispositivos móveis pode prejudicar a experiência do usuário e causar abandono de carrinho.
- **Risco 2**: Problemas de usabilidade no fluxo de checkout podem impactar as conversões, gerando um risco financeiro significativo.

## 7. Testes Extras (Diferenciais)

### 7.1 Testes de Responsividade

- Testar a plataforma em diferentes tamanhos de tela (desktop, tablet, mobile).
- Verificar se todos os elementos se ajustam corretamente sem comprometer a usabilidade.

### 7.2 Testes de Acessibilidade

- Testar com leitores de tela.
- Verificar se os elementos possuem contraste adequado e são legíveis para usuários com deficiências visuais.

### 7.3 Sugestões de Automação

- Automatizar o fluxo de login, compra e remoção de itens do carrinho.
- Implementar testes automatizados para validação de navegação entre páginas e ordenação de produtos.
