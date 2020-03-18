//bodyparser -- vai interpretar o body da requisicao 
const bodyParser = require('body-parser')
//cors - a partir de outra aplicação, vai poder acessar essa API
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json()) //vai interpretar um json no corpo da requisicao - onde vou aplicar o middleware
    app.use(cors())
}