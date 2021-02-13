const db = require('../../../db')

module.exports = {
    Query: {
         contatos: async () => await db('contatos'),
    }
}