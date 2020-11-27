const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')
const { crearPaciente } = require('../modelos/Paciente');

function crearPacientesApi(pacientesDao) {
    return {
        getByDni: async (dato) => {
            const dniValido = crearDniValido(dato)
            const pacientes = await pacientesDao.getByDni(dniValido)
            return pacientes
        },
        create: async (dato) => {
            const paciente = crearPaciente(dato)
            await pacientesDao.add(paciente)
            return paciente
        },
        getAll: async () => {
            const pacientes = await pacientesDao.getAll()
            return pacientes
        }
    }
}

function crearDniValido(dato) {
    if (isNaN(dato)) {
        throw crearErrorArgumentosInvalidos('el dni del paciente debe ser numerico')
    }
    return dato
}


module.exports = { crearPacientesApi }
