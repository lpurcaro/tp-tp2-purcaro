const express = require('express')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearEnsayosRouter({ aplicacion }) {
    router = express.Router()

    const ensayosApi = aplicacion

    router.post('/ensayo', wrap(async (req, res) => {
        const estudiante = await ensayosApi.create(req.body)
        res.status(201).json(estudiante)
    }))

    // router.delete('/:id', wrap(async (req, res) => {
    //     await estudiantesApi.deleteById(req.params.id)
    //     res.status(204).json()
    // }))
    //
    // router.put('/:id', wrap(async (req, res) => {
    //     const estudiante = await estudiantesApi.replaceById(req.body, req.params.id)
    //     res.json(estudiante)
    // }))

    return router
}

module.exports = { crearEnsayosRouter }
