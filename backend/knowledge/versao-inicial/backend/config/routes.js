module.exports = app => { //definir as rotas da aplicacao
    //vai salvar atraves de um post
    app.route('/users')
        .post(app.api.user.save) // o consign vai ajudar aqui a salvar o usuario a partir dessa rota
        .get(app.api.user.get)
    
    app.route('/users/:id') // o consign vai ajudar aqui a atualizar o usuario a partir dessa rota
        .put(app.api.user.save)
        .get(app.api.user.getById)
}