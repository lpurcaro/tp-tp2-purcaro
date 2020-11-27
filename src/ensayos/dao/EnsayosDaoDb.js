const { MongoClient } = require('mongodb')
const { crearEnsayo } = require('../modelos/Ensayo.js')

const {
    crearErrorDeBaseDeDatos
} = require('../../compartido/errores/ApiError.js')
const config = require('../../config/config.js')

function log(line) {
    if (config.isLogEnabled()) console.log(line)
}

async function crearEnsayosDaoDb({ cnxStr, dbName, collectionName }) {

    const client = new MongoClient(cnxStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(cnxStr)

    try {
        log('conectandose a mongodb...')
        await client.connect()
        log('...conectado!')
    } catch (error) {
        throw crearErrorDeBaseDeDatos(error.message)
    }

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    return {
        getAll: async () => {
            const registros = await collection.find({}).toArray()
            const ensayos = registros.map(reg => crearEnsayo(reg))
            return ensayos
        },
        getById: async (id) => {
            const registros = await collection.find({ id: id }).toArray()
            console.log(registro)
            const ensayos = registros.map(reg => crearEnsayo(reg))
            return ensayos
        },
        add: async (element) => {
            await collection.insertOne(element)
            delete element._id
        },
        close: async () => {
            log('cerrando conexion a mongodb...')
            await client.close()
            log('...conexion cerrada!')
        }
    }
}

module.exports = { crearEnsayosDaoDb }
