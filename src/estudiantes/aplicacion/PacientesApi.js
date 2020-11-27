const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

function crearPacientesApi(pacientesDao) {
    return {
        getByDni: async (dato) => {
            const dniValido = crearDniValido(dato)
            const pacientes = await pacientesDao.getByDni(dniValido)
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


module.exports = { crearEstudiantesApi }
