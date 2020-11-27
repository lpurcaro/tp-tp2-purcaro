const express = require('express')
const mailerFactory = require('../../factories/mailerFactory')
const pdfCreatorFactory = require('../../factories/pdfCreatorFactory')

let wrap = fn => (...args) => fn(...args).catch(args[2])

function crearEnsayosRouter({ aplicacion }) {
    router = express.Router()

    const ensayosApi = aplicacion.ensayosApi

    router.post('/', wrap(async (req, res) => {

        const emailSender = await mailerFactory.getMailer()
        const pdfCreator = await  pdfCreatorFactory.getPdfCreator()

        const ensayo = await ensayosApi.create(req.body)

        const filePath = await pdfCreator.generarPdf('ensayoClinico', ensayo)

        if (filePath) {
            await emailSender.sendEmail({ from: process.env.GMAIL_USER, to: req.body.enrolador.email, subject: 'Alta de ensayo clínico', text: 'Se encuentra adjunto el archivo con los datos del ensayo cargado' })
        }

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
