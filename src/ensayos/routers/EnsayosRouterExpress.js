const express = require('express')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearEnsayosRouter({ aplicacion }) {
    router = express.Router()

    const ensayosApi = aplicacion.ensayosApi

    router.post('/', wrap(async (req, res) => {
        const ensayo = await ensayosApi.create(req.body)
        res.status(201).json(ensayo)
    }))

    router.get('/:id', wrap(async (req, res) => {
        const ensayos = await ensayosApi.getById(req.params.id)
        res.json(ensayos)
    }))

    router.get('/', wrap(async (req, res) => {
        const ensayos = await ensayosApi.getAll()
        res.json(ensayos)
    }))


    return router
}


module.exports = { crearEnsayosRouter }
