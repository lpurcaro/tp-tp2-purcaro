const laboratorio = require('./laboratorio');
const { enrolador } = require('./usuario');

const RESUMEN_ENSAYO = {
    documento: {
        nombre: 'resumen-ensayo-00000001'
    },
    contenido: {
        laboratorio,
        enrolador,
        fechaInicio: '03-11-2020',
        fechaFin: '20-01-2021',
        titulo: 'Prueba de Minoxidil',
        descripcion: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        pacientes: 20,
        requisitos: [
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        ],
        id: 1,
        colors: {
            primary: '#05BCFF',
            secondary: '#8AD329'
        }
    }
};



module.exports = {
    RESUMEN_ENSAYO
}
