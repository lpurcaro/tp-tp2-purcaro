const { crearEnsayo } = require('../modelos/Ensayo');

function crearEnsayosApi(ensayosDao) {

    return {
        create: async (dato) => {
            const ensayo = crearEnsayo(dato)
            await ensayosDao.add(ensayo)
            return ensayo
        }
    }
}

// function crearDniValido(dato) {
//     if (isNaN(dato)) {
//         throw crearErrorArgumentosInvalidos('el dni del paciente debe ser numerico')
//     }
//     return dato
// }


module.exports = { crearEnsayosApi }
