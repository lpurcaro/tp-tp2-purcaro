const { crearErrorArgumentosInvalidos } = require('../../compartido/errores/ApiError.js')

let nextId = 1

function crearEnsayo(objeto) {

    const ensayo = {}

    if (!objeto.laboratorio) {
        throw crearErrorArgumentosInvalidos('laboratorio', 'campo requerido')
    } else {
        ensayo.laboratorio = objeto.laboratorio
    }

    if (!objeto.enrolador) {
        throw crearErrorArgumentosInvalidos('enrolador', 'campo requerido')
    } else {
        ensayo.enrolador = objeto.enrolador
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

    if (isNaN(objeto.pacientes)) {
        throw crearErrorArgumentosInvalidos('pacientes', 'campo requerido')
    } else {
        ensayo.pacientes = objeto.pacientes
    }

    if (!objeto.fechaFin) {
        throw crearErrorArgumentosInvalidos('fechaFin', 'campo requerido')
    } else {
        ensayo.fechaFin = objeto.fechaFin
    }

    if (!objeto.requisitos) {
        throw crearErrorArgumentosInvalidos('requisitos', 'campo requerido')
    } else {
        ensayo.requisitos = objeto.requisitos
    }

    if (!objeto.id) {
        ensayo.id = nextId++
    } else {
        ensayo.id = objeto.id
    }

    return ensayo
}

module.exports = { crearEnsayo }
