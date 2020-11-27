const { crearEnsayo } = require('../modelos/Ensayo');

function crearEnsayosApi(ensayosDao) {

    return {
        create: async (dato) => {
            const ensayo = crearEnsayo(dato)
            await ensayosDao.add(ensayo)
            return ensayo
        },
        getAll: async () => {
            const ensayos = await ensayosDao.getAll()
            return ensayos
        },
        getById: async (id) => {
        	const ensayo = await ensayosDao.getById(id)
            return ensayo
        }
    }
}



module.exports = { crearEnsayosApi }
