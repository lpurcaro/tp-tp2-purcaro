const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')


function crearPaciente(objeto) {

    const paciente = {}

    if (!objeto.nombre) {
        throw crearErrorArgumentosInvalidos('nombre', 'campo requerido')
    } else {
        paciente.nombre = objeto.nombre
    }

    if (!objeto.apellido) {
        throw crearErrorArgumentosInvalidos('apellido', 'campo requerido')
    } else {
        paciente.apellido = objeto.apellido
    }

    if (!objeto.edad) {
        throw crearErrorArgumentosInvalidos('edad', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.edad))) {
        throw crearErrorArgumentosInvalidos('edad', 'debe ser un entero')
    } else {
        paciente.edad = objeto.edad
    }

    if (!objeto.dni) {
        throw crearErrorArgumentosInvalidos('dni', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.dni))) {
        throw crearErrorArgumentosInvalidos('dni', 'debe contener unicamente caracteres numericos')
    } else {
        paciente.dni = objeto.dni
    }

    if (!objeto.asociado) {
        throw crearErrorArgumentosInvalidos('asociado', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.asociado))) {
        throw crearErrorArgumentosInvalidos('asociado', 'debe contener unicamente caracteres numericos')
    } else {
        paciente.asociado = objeto.asociado
    }

    if (!objeto.email) {
        throw crearErrorArgumentosInvalidos('email', 'campo requerido')
    } else {
        paciente.email = objeto.email
    }

    if (!objeto.ensayoId) {
        throw crearErrorArgumentosInvalidos('ensayoId', 'campo requerido')
    } else {
        paciente.ensayoId = objeto.ensayoId
    }

    if (isNaN(parseInt(objeto.ensayoId))) {
        throw crearErrorArgumentosInvalidos('ensayoId', 'debe contener unicamente caracteres numericos')
    } else {
        paciente.ensayoId = objeto.ensayoId
    }

    if (!objeto.id) {
        paciente.id = nextId++
    } else {
        paciente.id = objeto.id
    }
   
    return paciente
}

module.exports = { crearPaciente }
