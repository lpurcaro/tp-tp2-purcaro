async function crearEnsayosDaoMemoria() {
    const elementos = []

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        getAll: async () => {
            return [...elementos]
        },
        getById: async (id) => {
            console.log(elementos)
            return elementos.find(e => e.id == id)
        },
        close: async () => { }
    }
}

module.exports = { crearEnsayosDaoMemoria }
