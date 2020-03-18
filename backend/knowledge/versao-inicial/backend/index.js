const app = require("express")() //app representa a instancia do express
const consign = require('consign') //ajudar na gerencia das dependencias

consign()
    .then('./config/middlewares.js') //vai ser carregado esse arquivo pelo consign
    .then('./api') // vai ser carregado todos os arquivos da pasta api pelo consign
    .then('./config/routes.js') //so le as rotas depois de carregar a api para ter acesso
    .into(app) //injetar em cada dependencia como parametro o app criado


app.listen(3000,() => console.log('Backend executando...'))