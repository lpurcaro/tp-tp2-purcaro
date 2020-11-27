const {
    crearErrorArgumentosInvalidos,
    crearErrorRecursoNoEncontrado
} = require('../../compartido/errores/ApiError.js')

async function crearPacientesDaoMemoria() {
    const elementos = []

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        addUnique: async (elemento, claveUnica) => {
            const existe = elementos.some(e => {
                return e[claveUnica] === elemento[claveUnica]
            })
            if (existe) {
                throw crearErrorArgumentosInvalidos(claveUnica, 'debe ser unico')
            }
            elementos.push(elemento)
        },
        addAll: async (elementosNuevos) => {
            elementosNuevos.forEach(e => elementos.push(e))
        },
        getAll: async () => {
            return [...elementos]
        },
        getByDni: async (dni) => {
            return elementos.find(e => e.dni == dni)
        },
        getByAge: async ({ desde, hasta }) => {
            return elementos.filter(e => e.edad >= desde && e.edad <= hasta)
        },
        deleteById: async (unId) => {
            const indiceParaBorrar = elementos.findIndex(e => e.id == unId)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('paciente', unId)
            }
            elementos.splice(indiceParaBorrar, 1)
        },
        updateById: async (paciente) => {
            const indiceParaReemplazar = elementos.findIndex(e => e.id == paciente.id)
            if (indiceParaReemplazar === -1) {
                throw crearErrorRecursoNoEncontrado('paciente', paciente.id)
            }
            elementos.splice(indiceParaReemplazar, 1, paciente)
        },
        deleteAll: async () => {
            while (elementos.length > 0) {
                elementos.pop()
            }
        },
        close: async () => { }
    }
}

module.exports = { crearPacientesDaoMemoria }
