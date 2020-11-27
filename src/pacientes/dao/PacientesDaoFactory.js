const { crearPacientesDaoDb } = require('./PacientesDaoDb.js')
const { crearPacientesDaoMemoria } = require('./PacientesDaoMemory.js')
const config = require('../../config/config.js')

async function crearPacientesDao() {

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria')
        return await crearPacientesDaoMemoria()
    else if (tipoPersistencia === 'db')
        return await crearPacientesDaoDb(config.getCnxObj())
    else
        throw new Error('invalid type of db')
}

module.exports = { crearPacientesDao }
