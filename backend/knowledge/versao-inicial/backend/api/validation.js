module.exports = app =>{
    function existsOrError(value, msg) {
        if (!value) throw msg //se o valor for falso, gera erro (excecao)
        if (Array.isArray(value) && value.length === 0) throw msg //se for array e tiver vazio, ou seja, nao esta no BD, gera excecao
        if (typeof value === 'string' && !value.trim()) throw msg //se for string e estiver vazia (so com espacos em branco), gera excecao
    }

    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return
        } throw msg
    }

    function equalsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg
    }

    return {existsOrError, notExistsOrError,equalsOrError}
}
