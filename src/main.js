const { createServer } = require('./compartido/servidor/Server.js')
const { crearEnsayosDao } = require('./ensayos/dao/EnsayosDaoFactory')
const { crearEnsayosApi } = require('./ensayos/aplicacion/EnsayosApi.js')
const { crearPacientesDao } = require('./pacientes/dao/PacientesDaoFactory')
const { crearPacientesApi } = require('./pacientes/aplicacion/PacientesApi.js')

const config = require('../src/config/config.js')

let daoEnsayos
let server

async function main() {
    try {
        daoEnsayos = await crearEnsayosDao()
        daoPacientes = await crearPacientesDao()

        console.log(`base de datos conectada`)

        aplicacion = {
            ensayosApi : crearEnsayosApi(daoEnsayos),
            pacientesApi : crearPacientesApi(daoPacientes)
        }
      
        server = await createServer({ aplicacion, port: config.getServerPort() })
        console.log(`servidor conectado en puerto: ${server.port}`)
    } catch (e) {
        console.log(e.message)
    }
}

process.on('SIGINT', async () => {
    try {
        if (server) {
            server.close()
            console.log('servidor cerrado con exito')
        }
        if (daoEnsayos) {
            await daoEnsayos.close()
            console.log('base de datos desconectada con exito')
        }
    } catch (error) {
        console.err(error)
    } finally {
        process.exit(0)
    }
})

main()
