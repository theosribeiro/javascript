module.exports = app => {

    const Stat = app.mongoose.model('Stat', {
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req,res) => {
        Stat.findOne({},{}, {sort: {'createdAt' : -1}}) //pegar de forma decrecente, a ultima posição, a mais atualizada no mongoDB
            .then(stat => {
                const defaultStat = {
                    users: 0,
                    categories: 0,
                    articles: 0
                }
                res.json(stat || defaultStat) //pegar o resultado da consulta e mostrar como um json
            })
    }

    return {Stat, get}
}

