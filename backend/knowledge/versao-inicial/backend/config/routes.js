module.exports = app => { //definir as rotas da aplicacao
    //vai salvar atraves de um post
    app.route('/users')
        .post(app.api.user.save) // o consign vai ajudar aqui a salvar o usuario a partir dessa rota
        .get(app.api.user.get)
    
    app.route('/users/:id') // o consign vai ajudar aqui a atualizar o usuario a partir dessa rota
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)
    
    app.route('/categories/tree')
        .get(app.api.category.getTree)

    //id tem q vir depois para nao confundir, tree pode ser interpretado como id    
    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)

    app.route('/articles')
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/articles/:id')
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)

    app.route('/categories/:id/articles')
        .get(app.api.article.getByCategory)
}