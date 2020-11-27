const { crearEstudiantesDaoDb } = require('./PacientesDaoDb.js')
const { crearEstudiantesDaoMemoria } = require('./PacientesDaoMemory.js')
const config = require('../../config/config.js')

async function crearEstudiantesDao() {

    const tipoPersistencia = config.getTipoPers()

    if (tipoPersistencia === 'memoria')
        return await crearEstudiantesDaoMemoria()
    else if (tipoPersistencia === 'db')
        return await crearEstudiantesDaoDb(config.getCnxObj())
    else
        throw new Error('invalid type of db')
}

module.exports = { crearEstudiantesDao }
