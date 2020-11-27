require('dotenv').config()

let tipoPersistencia
let logEnabled
const serverPort = process.env.SERVER_PORT

tipoPersistencia = process.env.TIPO_PERSISTENCIA_DEV
logEnabled = true

const config = {
    getTipoPers: () => tipoPersistencia,
    getServerPort: () => serverPort
}

module.exports = Object.freeze(config)
