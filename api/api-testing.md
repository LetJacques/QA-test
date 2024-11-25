# Testes da API - Restful-Booker

Este repositório contém os testes realizados para validar a API Restful-Booker, um sistema de reservas de hotel. O objetivo é garantir a funcionalidade dos endpoints antes de sua integração com o front-end.

## 📋 Cenários Testados

### 1. Autenticação

#### 1.1 Gerar token de autenticação

- **Endpoint**: `POST /auth`
- **Descrição**: Verificar se o sistema retorna um token válido com credenciais corretas.
- **Resultado Obtido**: Código 200 OK, e token gerado no corpo da resposta.

#### 1.2 Tentar gerar token com credenciais inválidas

- **Endpoint**: `POST /auth`
- **Descrição**: Verificar se o sistema retorna erro com credenciais incorretas.
- **Resultado Obtido**: Código 401 Unauthorized, com mensagem de erro.

---

### 2. Gestão de Reservas

#### 2.1 Criar uma nova reserva

- **Endpoint**: `POST /booking`
- **Descrição**: Validar se o sistema cria uma nova reserva com os dados enviados.
- **Dados Enviados**: BODY
  ```json
  {
    "firstname": "John",
    "lastname": "Marston",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2018-01-01",
      "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
  }
  ```
- **Resultado Obtido**: 200 OK. Campos preenchidos conforme os dados enviados, junto com o id da reserva.

#### 2.2 Listar Todas as Reservas

- **Endpoint**: `GET /booking`
- **Descrição**: Verificar se a listagem de IDs de reservas retorna corretamente.
- **Dados Enviados**: Nenhum corpo necessário.
- **Resultado Obtido**: 200 OK. Todos os bookingid listados no body.

#### 2.3 Buscar uma reserva específica

- **Endpoint**: `GET /booking/1`
- **Descrição**: Verificar se é possível obter uma reserva específica usando o ID.
- **Dados Enviados**: Nenhum corpo necessário.
- **Resultado Obtido**: 200 OK. Todos os campos da reserva listados no body.

#### 2.4 Atualizar uma reserva existente

- **Endpoint**: `PUT /booking/1`
- **Descrição**: Verificar se é possível atualizar uma reserva existente com sucesso.
- **Dados Enviados**: BODY
  ```json
  {
    "firstname": "John",
    "lastname": "Marston",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2018-01-01",
      "checkout": "2018-01-10"
    },
    "additionalneeds": "Breakfast"
  }
  ```
- **Resultado Obtido**: Código 200 OK, detalhes da reserva atualizados no body.

#### 2.5 Deletar uma reserva

- **Endpoint**: `DELETE /booking/1`
- **Descrição**: Verificar se é possível excluir uma reserva existente com autenticação válida.
- **Dados Enviados**: Nenhum corpo necessário, apenas escrever o número do ID a ser deletado na requisição.
- **Resultado Obtido**: 200 OK. O id é excluído.

#### 2.6 Criar Reserva com Dados Faltando

- **Endpoint**: `POST /booking`
- **Descrição**: Verificar o comportamento da API ao enviar dados faltando (ex: firstname ausente).
- **Dados Enviados**: Body contendo "lastname", "totalprice", "depositpaid", "bookingdates" e "additionalneeds".
- **Resultado Obtido**: Código 500 Internal Server Error.
- **Bug Encontrado**: O sistema deveria retornar um "Erro 400" com mensagem indicando que o campo "firstname" é obrigatório.

#### 2.7 Atualizar Reserva sem Basic Auth concedida, apenas Headers de autenticação com token.

- **Endpoint**: `PUT /booking/1`
- **Descrição**: Verificar se o sistema atualiza a reserva com Headers de Autenticação por token, sem Basic Auth concedida.
- **Dados Enviados**: Body contendo "firstname", "lastname", "totalprice", "depositpaid", "bookingdates" e "additionalneeds".
- **Resultado Obtido**: Código 403 Forbidden.
- **Bug Encontrado**: A documentação da API apresenta duas formas de autenticação, autorização através do header com cookie através do token, ou basic auth, porém o erro ocorre sempre que não é concedido acesso através do Basic Auth, não importando se coloca o token no cabeçalho.

#### 2.8 Atualizar Reserva com ID Inexistente.

- **Endpoint**: `PUT /booking/333333`
- **Descrição**: Verificar se o sistema retorna um erro adequado quando a atualização é tentada em uma reserva que não existe.
- **Dados Enviados**: Body contendo "firstname", "lastname", "totalprice", "depositpaid", "bookingdates" e "additionalneeds".
- **Resultado Obtido**: Código 405 Method Not Allowed.
- **Bug Encontrado**: O sistema deveria retornar um erro 404 Not Found, indicando que o número de ID da reserva não é válido.

#### 2.9 Atualizar Reserva Com Dados Incompletos

- **Endpoint**: `PUT /booking/1`
- **Descrição**: Verificar se o sistema lida corretamente com a atualização de uma reserva com dados faltando.
- **Dados Enviados**: Body contendo "firstname", "totalprice", "depositpaid", "bookingdates" e "additionalneeds".
- **Resultado Obtido**: Código 404 Bad Request.

#### 2.10 Atualizar Reserva com Preço Negativo.

- **Endpoint**: `PUT /booking/1`
- **Descrição**: Verificar se o sistema valida corretamente os dados antes de aplicar a atualização.
- **Dados Enviados**: Body contendo "totalprice" com valor negativo.
- **Resultado Obtido**: Código 200 OK.
- **Bug Encontrado**: O sistema deveria retornar Código 400 Bad Request, com uma mensagem de erro.

#### 2.11 Atualizar Reserva com com Campos de Data Inválidos

- **Endpoint**: `PUT /booking/1`
- **Descrição**: Verificar se o sistema lida corretamente com datas inválidas.
- **Dados Enviados**: no campo "bookingdates", "checkin": "invalid-date", ao inves de uma data no formato YYYY-MM-DD.
- **Resultado Obtido**: Código 200 OK.
- **Bug Encontrado**: O sistema aceita entrada de datas inválidas, que não seguem no formato YYYY-MM-DD, resultando no body "checkin": "0NaN-aN-aN".

#### 2.12 Atualizar Reserva com Token Inválido

- **Endpoint**: `PUT /booking/1`
- **Descrição**: Verificar se o sistema rejeita a atualização de reserva com token inválido.
- **Dados Enviados**: Body contendo "firstname", "totalprice", "depositpaid", "bookingdates" e "additionalneeds".
- **Resultado Obtido**: Código 200 OK
- **Bug Encontrado**: Mesmo com um código de token inválido, desde que o usuário receba uma Basic Auth ele consegue realizar atualização da reserva.

#### 2.13 Atualização Parcial comDados Válidos

- **Endpoint**: `PATCH /booking/1`
- **Descrição**: Enviar um payload parcial com campos válidos para atualizar uma reserva existente.
- **Dados Enviados**: Body contendo "firstname" e "lastname".
- **Resultado Obtido**: Código 200 OK. Campos fornecidos foram atualizados.

#### 2.14 Atualização com Todos os Campos do Payload

- **Endpoint**: `PATCH /booking/1`
- **Descrição**: Enviar um payload contendo todos os campos para validar a atualização completa.
- **Dados Enviados**: Body contendo "firstname", "lastname", "totalprice", "depositpaid", "bookingdates" e "additionalneeds".
- **Resultado Obtido**: Código 200 OK. Todos os campos atualizados.

#### 2.15 Atualização sem Auth basic, mas com headers de autenticaçao

- **Endpoint**: `PATCH /booking/1`
- **Descrição**: Enviar uma requisição com cabeçalhos de autenticação (Cookie) mas sem aplicar Auth basic.
- **Dados Enviados**: Body contendo "firstname", "lastname".
- **Resultado Obtido**: Código 403 Forbidden.
- **Bug Encontrado**: A documentaçao da API apresenta que a autenticação pode ser feita atraves dos Cookies no header, ou com Basic Auth, porém, sem o basic auth, mesmo com o token através dos Cookies, não é autorizado a atualização do usuário.

#### 2.16 Atualização de um ID de Reserva Inexistente

- **Endpoint**: `PATCH /booking/9999`
- **Descrição**: Enviar uma requisição com um ID de reserva inexistente.
- **Dados Enviados**: Body contendo "firstname", "lastname", em um id que não existe.
- **Resultado Obtido**: 405 Method Not Allowed
- **Bug Encontrado**: O status code esperado para um ID inexistente geralmente seria 404 (Not Found), e não 405 (Method Not Allowed), pois o método PATCH é permitido no endpoint, mas o recurso especificado (o ID) não foi encontrado.

#### 2.17 Atualização com Payload Vazio

- **Endpoint**: `PATCH /booking/1`
- **Descrição**:Enviar uma requisição sem dados no body da atualização.
- **Dados Enviados**: nenhum.
- **Resultado Obtido**: Código 200 OK.
- **Bug Encontrado**: O sistema não deveria permitir receber um array vazio ao atualizar.

#### 2.18 Atualização com Formato de Dados Inválido

- **Endpoint**: `PATCH /booking/1`
- **Descrição**: Enviar um payload com tipos de dados incorretos (número no lugar de string).
- **Dados Enviados**: no body "firstname": "123".
- **Resultado Obtido**: Código 200 OK. O nome foi atualizado para um número.
- **Bug Encontrado**: Campos do tipo string estão aceitando números.

#### 2.19 Atualização com Campo Extra

- **Endpoint**: `PATCH /booking/1`
- **Descrição**: Enviar um payload com um campo de informação extra, que não existe no sistema.
- **Dados Enviados**: no body "firstname": "John", "extraField": "ThisShouldBeIgnored"
- **Resultado Obtido**: Código 200 OK. O campo extra foi ignorado.

#### 2.20 Atualização com Campos Aninhados Incompletos

- **Endpoint**: `PATCH /booking/1`
- **Descrição**: Enviar um payload onde apenas parte do sub-objeto bookingdates é preenchida.
- **Dados Enviados**: no campo "bookingdates", apenas a data de checkin foi preenchida.
- **Resultado Obtido**: Código 200 OK, com o campo "checkout": "0NaN-aN-aN"
- **Bug Encontrado**: A API aceita campos aninhados incompletos e retorna um resultado inesperado, quando deveria rejeitar a solicitação com um erro 400.

#### 2.21 Exclusão sem autenticação

- **Endpoint**: `DELETE /booking/1`
- **Descrição**: Garantir que a API não permita a exclusão sem autenticação.
- **Dados Enviados**: Authorization: No Auth
- **Resultado Obtido**: 403 Forbidden Mensagem indicando que a autenticação é obrigatória.

#### 2.22 Exclusão com ID em formato inválido

- **Endpoint**: `DELETE /booking/abc`
- **Descrição**: Verificar como a API lida com um ID inválido no formato (ex.: abc em vez de um número).
- **Resultado Obtido**: "405 Method Not Allowed. Método não permitido para o recurso".
- **Bug Encontrado**: A API retorna 405 Method Not Allowed, indicando que o método não é permitido para o recurso, o comportamento esperado é o retorno de 400 Bad Request, indicando que o formato do ID não é válido para o recurso.

#### 2.23 Re-tentativa de exclusão

- **Endpoint**: `DELETE /booking/1`
- **Descrição**: Validar o comportamento ao tentar excluir uma reserva já excluída.
- **Resultado Obtido**: 405 Method Not Allowed.
- **Bug Encontrado**: Ao enviar uma requisição para excluir uma reserva já excluída, a API retorna 405 Method Not Allowed. O esperado é 404 Not Found, indicando que o recurso não existe mais.

#### 2.24 Exclusão com alta concorrência

- **Endpoint**: `DELETE /booking/:id`
- **Descrição**: Simular múltiplas requisições de exclusão para verificar como a API lida com concorrência.
- **Dados Enviados**: requisiçao de multiplos delete com ids diferentes.
- **Resultado Obtido**: 201 Created
- **Bug Encontrado**: Status de retorno inadequado para operações DELETE, a API retorna 201 Created, comportamento ideal seria um código 200 OK.

---

### 3. Filtros e Buscas

#### 3.1 Buscar reservas por nome

- **Endpoint**: `GET /booking?firstname=Susan&lastname=Smith`
- **Descrição**: Validar que o endpoint GET /booking retorna corretamente os IDs das reservas quando filtrado pelos parâmetros
  firstname e lastname.
- **Dados Enviados**: Adicionado o nome e sobrenome do usuátio na URL.
- **Resultado Obtido**: Código 200 OK, no body descrito o bookingid da reserva do usuário.

#### 3.2 Buscar reservas por data de check-in

- **Endpoint**: `GET //booking?checkin=2022-01-01`
- **Descrição**: Validar que o endpoint GET /booking retorna os IDs das reservas quando filtrado pelo parâmetro check-in.
- **Dados Enviados**: Adicionado o parametro "checkin" e a data a ser filtrado.
- **Resultado Obtido**: Código 200 OK, e a lista dos id com check-in reservado para esta data.

#### 3.3 Buscar reservas por data de check-in

- **Endpoint**: `GET /booking?checkout=2022-01-01`
- **Descrição**: Validar que o endpoint GET /booking retorna os IDs das reservas quando filtrado pelo parâmetro check-out.
- **Dados Enviados**: Adicionado o parametro "checkout" e a data a ser filtrado.
- **Resultado Obtido**: Código 200 OK, e a lista dos id com check-out para esta data.

---

## 🐞 Bugs Encontrados

- **O sistema aceita valores inválidos para campos obrigatórios (ex.: datas em formatos errados, preços negativos).**
- **Falha ao validar credenciais de autenticação em certos cenários.**
- **Erros de status code inconsistentes, como 405 em vez de 404.**

---

## 📂 Ferramentas Utilizadas

- **Postman: Para criação e execução de testes.**
- **Variáveis de Ambiente: Configuradas para facilitar o uso de endpoints e autenticação.**
