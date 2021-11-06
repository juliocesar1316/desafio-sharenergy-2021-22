# Desafio para processo seletivo SHARENERGY 2021/22

Projeto criado para o processo seletivo da SHARENERGY onde o front foi criado usando react e o back end foi criado com node.js porem em repositorio diferente pois a mesma foi feito deploy na heroku junto com banco de dados Postgress.

## Primeiros Passos

- Fazer o fork da aplicação front <br><br>

- No terminal se o caminho da pasta não estiver direcionado para "sharenergy-front" será preciso rodas um <b>cd sharenergy-"front</b>.<br><br>

- Na pasta sharenergy-front rodar <b>npm install</b> para instalar as dependencias da aplicação<br><br>

- Após instalar, sua aplicação ja esta pronta e para rodar é necessario inserir no terminal <b>npm start</b> <br><br>

- A aplicação para teste foi inserido um usuario e uma senha onde apos dar o login com elas voce tera acesso ao app.
  usuario: <b>admin</b> senha:<b>admin</b>

## Instruções para o CRUD da API:

#### 1. `GET` `Clientes` https://api-sharenergy.herokuapp.com/cliente

Esse endpoint irá listar todas os clientes cadastrados, e o retorno inicial será:

```json=
[
  {
    "id": 1,
    "nomecliente": "Ana Silva",
    "telefone": "1198205522",
    "cpf": "40079455886",
    "email": "anasilva@yahoo.com.br"
  }
]
```

#### 2. `GET` `Usinas` https://api-sharenergy.herokuapp.com/usina
Esse endpoint irá listar todas os dados da usina que em questao é a primeira cadastrada, e o retorno inicial será:
```json=
[
  {
    "id": 1,
    "nomeusina": "Usina São Gonçalo",
    "endereco": "São Gonçalo do Gurguéia",
    "segmento": "Solar"
  }
]
```

#### 3. `GET` `DadosUsina` https://api-sharenergy.herokuapp.com/graficoUsina

Esse endpoint irá listar todas os dados da usina que em questao é a primeira cadastrada, e o retorno inicial será:

```json=
[
  {
    "id": 1,
    "tempo_h": "5.333333333333333",
    "tensao_v": "550.9",
    "corrente_a": "0",
    "potencia_kw": "0",
    "temperatura_c": "26.2"
  }
]
```

#### 4. `GET` `Investimento` https://api-sharenergy.herokuapp.com/investimento

Esse endpoint irá listar todas os investimentos dos clientes e o percentual sobre as usinas, e o retorno inicial será:

```json=
[
  {
    "id": 1,
    "numerocliente": 1,
    "nomecliente": "Ana Silva",
    "usinaid": 1,
    "nomeusina": "Usina São Gonçalo",
    "percentualdeparticipacao": 30
  }
]
```

## Ferramentas Utilizadas

### Front-End

linguagem: react

- react-router-dom
- recharts
- @material-ui/core
- @material-ui/icons

### Back-End

linguagem: node.js

- cors
- express
- knex
- nodemon
- pg
- sqlite3

## Links

[ Repositório Back-End](https://github.com/juliocesar1316/back-end-sharenergy)

[API Sharenergy (api heroku)](https://api-sharenergy.herokuapp.com)

[Repositório Front-End](https://github.com/juliocesar1316/desafio-sharenergy-2021-22/tree/julio-cesar-de-oliveira-martins)
