const express = require('express')
const mailerFactory = require('../../factories/mailerFactory')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearEnsayosRouter({ aplicacion }) {
    router = express.Router()

    const ensayosApi = aplicacion

    router.post('/add', wrap(async (req, res) => {

        const emailSender = await mailerFactory.getMailer();

        const ensayo = await ensayosApi.create(req.body)

        await emailSender.sendEmail({ from: process.env.GMAIL_USER, to: 'lucila.purcaro@gmail.com', subject: 'Alta de ensayo clínico', text: 'Se encuentra adjunto el archivo con los datos del ensayo cargado' })

        res.status(201).json(ensayo)
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
