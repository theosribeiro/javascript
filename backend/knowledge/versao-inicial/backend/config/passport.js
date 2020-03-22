const {authSecret} = require('../.env') //ler o token e ver se é o esperado
const passport = require('passport')
const passportJwt = require('passport-jwt')
const {Strategy, ExtractJwt} = passportJwt

module.exports = app =>{
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    const strategy = new Strategy(params, (payload, done) => { //funcao callback (done,payload)
        app.db('users')
            .where({id: payload.id})
            .first()
            .then(user => done(null,user ? {...payload} : false))
            .catch(err => done(err,false))            
    })

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate('jwt', {session: false})
    }
}