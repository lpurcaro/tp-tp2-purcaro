const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearEnsayo(objeto) {

    const ensayo = {}

    console.log(objeto)

    if (!objeto.laboratorio) {
        throw crearErrorArgumentosInvalidos('laboratorio', 'campo requerido')
    } else {
        ensayo.laboratorio = objeto.laboratorio
    }

    if (!objeto.usuario) {
        throw crearErrorArgumentosInvalidos('usuario', 'campo requerido')
    } else {
        ensayo.usuario = objeto.usuario
    }

    if (!objeto.titulo) {
        throw crearErrorArgumentosInvalidos('titulo', 'campo requerido')
    } else {
        ensayo.titulo = objeto.titulo
    }

    if (!objeto.descripcion) {
        throw crearErrorArgumentosInvalidos('descripcion', 'campo requerido')
    } else {
        ensayo.descripcion = objeto.descripcion
    }

    if (isNaN(parseInt(objeto.pacientes))) {
        throw crearErrorArgumentosInvalidos('pacientes', 'debe contener unicamente caracteres numericos')
    } else {
        ensayo.pacientes = objeto.pacientes
    }

    if (!objeto.fechaInicio) {
        throw crearErrorArgumentosInvalidos('fechaInicio', 'campo requerido')
    } else {
        ensayo.fechaInicio = objeto.fechaInicio
    }

    if (!objeto.fechaFin) {
        throw crearErrorArgumentosInvalidos('fechaFin', 'campo requerido')
    } else {
        ensayo.fechaFin = objeto.fechaFin
    }

    if (!objeto.dni) {
        throw crearErrorArgumentosInvalidos('dni', 'campo requerido')
    }

    if (!objeto.id) {
        ensayo.id = nextId++
    } else {
        ensayo.id = objeto.id
    }

    return ensayo
}

module.exports = { crearEnsayo }
