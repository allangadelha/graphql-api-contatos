// const usuarioCadastroService = require('../../../services/UsuarioCadastroService')

module.exports = {
    Query: {
        contato: async (_, {id}) => await usuarioCadastroService.contato(id),
        contatos: async (obj, args, { usuarioCadastroService}) =>
            await usuarioCadastroService.contatos()
    },

    Mutation: {
        criarContato: async (_, { data }, {usuarioCadastroService}) => 
            await usuarioCadastroService.criarContato(data),

        atualizarContato: async (_, {id,  data }, {usuarioCadastroService}) => 
            await usuarioCadastroService.atualizarContato(id, data),

        deletarContato: async (_, { filtro }, {usuarioCadastroService}) => 
            await usuarioCadastroService.deletarContato(filtro)
            
    }

}