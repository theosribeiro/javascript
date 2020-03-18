//criar um module que retorna uma funcao arrow e eh passado como parametro o app
module.exports = app => { //fazer essa funcao retornar para fora do modulo um objeto de todos as constantes criadas dentro dele - save 
    const save = (req,res) => {
        res.send('user save')
    }
    return { save }
}