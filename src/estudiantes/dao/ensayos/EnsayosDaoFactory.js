const { crearEnsayosDaoDb } = require('./EnsayosDaoDb.js')
const { crearEnsayosDaoMemoria } = require('./EnsayosDaoMemory.js')
const config = require('../../config/config.js')

async function crearEnsayosDao() {

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria')
        return await crearEnsayosDaoMemoria()
    else if (tipoPersistencia === 'db')
        return await crearEnsayosDaoDb(config.getCnxObj())
    else
        throw new Error('invalid type of db')
}

module.exports = { crearEnsayosDao }
