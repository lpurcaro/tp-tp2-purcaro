async function crearEnsayosDaoMemoria() {
    const elementos = []

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        getAll: async () => {
            return [...elementos]
        },
        getById: async (dni) => {
            return elementos.filter(e => e.dni === dni)
        },
        close: async () => { }
    }
}

module.exports = { crearEnsayosDaoMemoria }
