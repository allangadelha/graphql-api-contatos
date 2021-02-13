const db = require('../db')
class UsuarioCadastroService {
    constructor(service) {
        this.service = service
    }

    contatos = async () => await this.service('contatos')
    contato = async (id) => await this.service('contatos').where({id}).first().then((row) => row)
    
    criarContato = async (data) => 
            await(await this.service('contatos').insert(data).returning('*'))[0]

    atualizarContato = async (id, data) => 
        await(await this.service('contatos').where({ id }).update(data).returning('*'))[0]

    deletarContato = async (filtro) => {
        if(filtro.id){
            return await this.service('contatos').where({ id: filtro.id }).delete()
        }
        if(filtro.email){
            return await this.service('contatos').where({ email: filtro.email }).delete() 
        }

        throw new Error('Favor passar um parâmetro')
    }
}

module.exports = new UsuarioCadastroService(db)