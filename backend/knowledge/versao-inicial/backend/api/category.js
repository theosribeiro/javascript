module.exports = app => {
    const {existsOrError, notExistsOrError} = app.api.validation

    //incuir ou alterar uma categoria
    const save = (req, res) => {
        const category = {...req.body} //category pega todos os atributos do body
        if(req.params.id) category.id = req.params.id // se vier o id na requisicao, vou capturar o id

        try{
            existsOrError(category.name, 'Nome não Informado')
        }catch(msg){
            return res.status(400).send(msg)
        }

        if (category.id) { // se tiver setado o id, atualizar
            app.db('categories')
                .update(category)
                .where({id: category.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).send(err))
        } else{ // se n, inserir no bd
            app.db('categories')
                .insert(category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    //preciso fazer validacoes para saber se pode ou nao remover, usa assync
    const remove = async (req, res) => {
        try {
            //uma categoria pode ter varios artigos ou categoria filha. Para remover, tem que desassociar essa categoria dos artigos ou categorias filhas
            existsOrError(req.params.id, 'Código da Categoria não informado.')

            const subcategory = await app.db('categories') //usa await para consultar no BD para saber se tem subcategorias
                .where({ parentId: req.params.id })
            notExistsOrError(subcategory, 'Categoria possui subcategorias.')

            const articles = await app.db('articles')
                .where({ categoryId: req.params.id })
            notExistsOrError(articles, 'Categoria possui artigos.')

            const rowsDeleted = await app.db('categories')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Categoria não foi encontrada.')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    const withPath = categories => { //recebe uma lista de categorias e retorna uma lista com um atributo a mais
        //ver se o id da categoria superior esta na categoria inferior
        const getParent = (categories, parentId) => {
            const parent = categories.filter(parent => parent.id === parentId) // eh retornado uma unica categoria que bateu com a categoria pai
            return parent.length ? parent[0] : null //se esse array tiver tamanho maior que 0, eh verdadeiro, retorna o id que estava procurando
        }

        const categoriesWithPath = categories.map(category => {
            let path = category.name
            let parent = getParent(categories, category.parentId)
            
            //capturar todos os parents de cada categoria
            while(parent){  
                path = `${parent.name} > ${path}`
                parent = getParent(categories, parent.parentId) //parent do parent
            }

            return{...category, path}
        
        })

        //ordenacao pelo path e nao pelo id
        categoriesWithPath.sort((a,b) => {
            if(a.path < b.path) return -1
            if(a.path > b.path) return 1
            return 0
        })

        return categoriesWithPath

    }

    //funcao retornar as categorias
    const get = (req,res) => {
        app.db('categories')
            .then(categories => res.json(withPath(categories)))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req,res) =>{
        app.db('categories')
            .where({id: req.params.id})
            .first()
            .then(category => res.json(category))
            .catch(err => res.status(500).send(err))
    }

    //transformar o array de categoria em arvore
    //funcao arrow vai receber um array de categorias e uma arvore
    const toTree = (categories, tree) =>{
        //gerar arvore inicial, quando tree estiver vazia
        if(!tree) tree = categories.filter(c => !c.parentId)
        tree = tree.map(parentNode => {
            const isChild = node => node.parentId == parentNode.id
            parentNode.children = toTree(categories,categories.filter(isChild))
            return parentNode
        })
        return tree
    }

    const getTree = (req,res) => {
        app.db('categories')
            .then(categories => res.json(toTree(categories)))
            .catch(err => res.status(500).send(err))
    }

    return{save,remove,get,getById,getTree}
}