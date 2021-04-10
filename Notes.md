# Back-end
- Aquilo que o usuário não enxerga
- Executado no servidor
- Implementa as regras de negócio, acesso a banco de dados etc
- Fornece os dados para o front-end através de uma API (Application Program Interface)

## Node.js
Usando a engine V8 do Chrome podemos executar javascript fora do browser, aproveitando das funcionalidades de acesso a sistema de arquivos, dispositivos e banco de dados.
Aqui usamos o framework Express para as aplicações em node.js, muito útil para dar a base inicial e configurar as rotas.

Criando um projeto node:
```
$ npm init -y
$ npm install express

$ npm index.js

```
## API RESTFUL
Conjunto de regras e protocolos para o desenvolvimento de APIs.

## JSON (JavaScript Object Notation)
Formato de estrutura de dados basedo em chave/valor. É através desse formato que será estabelecida a comunicação entre o front-end e back-end.

## Rotas e recursos
Rota é o caminho completo de acesso ao servidor, recurso é o final do caminho, aquilo que especifica qual parte dos backend queremos acessar.

## Métodos HTTP
- Get: Buscar uma informação do back-end
- Post: Criar uma informação no back-end
- Put: Alterar uma informação no back-end
- Delete: Deletar uma informação no back-end

## Tipos de parâmetros
Parâmetros são enviados na rota.

- Query params: Parâmetros nomeados enviados na rota após `?` e separados por `&` (Filtros, paginação) `request.query`
- Route params: Parâmetros utilizados para identificar recursos `request.params`
- Request body: Corpo da requisição, utilizado para criar ou alterar recursos
- Data:

## Insomnia
Software que facilita a criação de APIs, com ele é possível visualizar o retorno de diversos métodos para diversos recursos diferentes da aplicação.

## Nodemon
Pacote que fornece um auto-refresh do servidor node.
Instalamos com a flag `-D` para que o pacote seja instalado como uma dependência de desenvolvimento, não de produção:

```
$ npm install nodemon -D

```

## Bancos de dados
Dois tipos principais:
- Relacionais (SQL): MySQL, PostgreSQL, Microsoft SQL etc. Estrutura mais rígida e com relacionamentos claros.
- Não-relacionais (NoSQL): MongoDB, CouchDB etc. Estrutura menos rígida e mais escalável.

SQLite: Um banco de dados relacional simples e leve.

As principais formas de acessar o banco de dados através da aplicação Node.js são:

- Driver: Querys SQL usando o driver específico do banco de dados usado.
- Query Builder: Permite escrever as querys em JavaScript, permite compatibilidade com outros bancos sql.

Knex.js é um dos mais populares query builders atualmente:

```
$ npm install knex

$ npm install sqlite3

```

Para iniciar o Knex e criar o arquivo de configuração:
```
$ npx knex init

```

As migrations do Knex permitem criar as tabelas do banco de usando JS.

Criando uma nova migration:

```
$ npx knex migrate:make nome_migration

```

Executando uma nova migration:

```
$ npx knex migrate:latest

```

Desfazendo a última migration:

```
$ npx knex migrate:rollback

```

## CORS
É um módulo que permite restringir quais domínios podem fazer uma requisição para a aplicação.










# Front-end
- Interação com o usuário, UI/UX
- Consome os dados do back-end através da API do mesmo

## SPA (Single Page Applications)
Ao invés do servidor retornar as páginas inteiras em HTML, ele retorna somente os dados (JSON) para que o front-end exiba essas informações na tela da maneira definida por ele.

- Maior flexibilidade, vários clientes podem consumir as informações do servidor.

## React
Framework bala interfaces reativas.

- JSX é o HTML integrado ao JavaScript
- Fazendo parte do npm, o npx permite executar comandos de pacotes externos sem a necessidade de instalar eles.

Criando um projeto react:
```
$ npx create-react-app <nome do projeto>
$ npm start

```

- Um componente nada mais é do que uma função que retorna HTML
- No React as propriedades são atributos passados para os componentes. Elas são passadas através do parâmetro props da função do componente.
- Estados são variáveis cuja mudança de valor faz com que o componente seja recarregado.
- Por razões de performance não é possível alterar diretamente o valor de um estado, apenas sobrepor valores usando a função que é retornada no momento da criação do estado.


## React Native
Usando JavaScript pra mobile de forma nativa, fornecendo mais flexibilidade e reusabilidade de código.

O Expo é um framework que torna possível o acesso de funções nativas do dispositivo mobile.
