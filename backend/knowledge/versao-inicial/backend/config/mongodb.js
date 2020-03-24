const mongoose = require('mongoose') //mongoose vai se conectar ao mongodb
const {mongodb_path_table} = require('../.env') 
//mongoose.connect('mongodb://localhost/knowledge_stats', {useNewUrlParser: true})
mongoose.connect(mongodb_path_table, { useNewUrlParser: true })
    .catch(e => {
        const msg = "ERRO: Não foi possível conectar com o MongoDB"
        console.log("\x1b[41m%s\x1b[37m",msg,"\x1b[0m")
    })
