const admin = require('./admin')

module.exports = app => { //definir as rotas da aplicacao
    //autenticacao - URLs publicas, qualquer pessoa pode acessar sem validacao do token
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    
    //vai salvar atraves de um post
    app.route('/users')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get depois de autenticar
        .post(admin(app.api.user.save)) // o consign vai ajudar aqui a salvar o usuario a partir dessa rota
        .get(admin(app.api.user.get))
    
    app.route('/users/:id') // o consign vai ajudar aqui a atualizar o usuario a partir dessa rota
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))

    app.route('/categories')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save))
    
    app.route('/categories/tree')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.category.getTree)

    //id tem q vir depois para nao confundir, tree pode ser interpretado como id    
    app.route('/categories/:id')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))

    app.route('/articles')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))

    app.route('/articles/:id')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate()) //so vai chamar os metodos post e get ou qlq outro depois de autenticar
        .get(app.api.article.getByCategory)

    app.route('/stats')
        .get(app.config.passport.authenticate())
        .get(app.api.stat.get)
}