const bcrypt = require('bcrypt-nodejs')

//criar um module que retorna uma funcao arrow e eh passado como parametro o app
module.exports = app => { //fazer essa funcao retornar para fora do modulo um objeto de todos as constantes criadas dentro dele - save 
    //validacao antes de salvar
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    //criar hashcode para gerar uma senha atraves da senha passada pelo user para gravar no bd
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    
    const save = async (req,res) => { //vai servir para salvar e atualizar um user
        const user = {...req.body} //... é um operador spread para espalhar todos os atributos de body
        if (req.params.id) user.id = req.params.id //atualizar o user existente
        //res.send('user save')
        //tratamento de dados
        try{
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'Email não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação da senha inválida!')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem') // se as 2 senhas forem diferentes, da erro
            
            //saber se o user ja esta cadastrado
            const userFromDB = await app.db('users')
                .where({email: user.email}).first()
            if(!user.id){
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        }catch(msg){
            return res.status(400).send(msg) //erro de falta de dados do user, o user tem q preencher os dados corretamente
        }
       
        user.password = encryptPassword(user.password) //criptografar a senha
        delete user.confirmPassword //nao quero salvar no bd essa senha

        //se ja escontrou o user, atualize
        if(user.id){
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt') //atualiza somente se o campo esta null
                .then(_ => res.status(204).send()) //deu certo, atualizou
                .catch(err => res.status(500).send(err))
        }else{ //se n, insira
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    //metodo para listar todos os users do sistema, somente aqueles que não foram "excluidos" (deletedAt vazio)
    const get = (req,res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    //metodo para listar o user do sistema pelo ID
    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({id: req.params.id})
            .whereNull('deletedAt')
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    //remover usuario apenas se o mesmo nao tem artigos associados a ele,
    //se tiver, tem q desassociar e depois excluir(exclusão somente informando a data q foi exluido)
    const remove = async (req,res) =>{
        try{
            const articles = await app.db('articles')
                .where({userId: req.params.id})
            notExistsOrError(articles, "O Usuário possui artigos.")

            const rowsUpdated = await app.db('users')
                .update({deletedAt: new Date()}) //atualizar o campo com a data atual
                .where({id: req.params.id})
            existsOrError(rowsUpdated, "O usuário não foi encontrado.")

            res.status(204).send()
        }catch(msg){
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove } //retorna o metodo save e get
}