module.exports = app => { //definir as rotas da aplicacao
    //autenticacao - URLs publicas, qualquer pessoa pode acessar sem validacao do token
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    
    //vai salvar atraves de um post
    app.route('/users')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get depois de autenticar
        .post(app.api.user.save) // o consign vai ajudar aqui a salvar o usuario a partir dessa rota
        .get(app.api.user.get)
    
    app.route('/users/:id') // o consign vai ajudar aqui a atualizar o usuario a partir dessa rota
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.category.get)
        .post(app.api.category.save)
    
    app.route('/categories/tree')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.category.getTree)

    //id tem q vir depois para nao confundir, tree pode ser interpretado como id    
    app.route('/categories/:id')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)

    app.route('/articles')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/articles/:id')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.article.getByCategory)
}