const pdf = require("pdf-creator-node");
const fs = require('fs');

let pdfConfig = {}
let filesCount = 0

// absolutePath: string - el path donde se van a guardar los archivos generados
// opciones: {format: string, orientation: string, boder: string, footer: {height: string, constents: {first: string, 2: string, default: html, last: string}}}
// template: [{name: string, content: string}]
function createPdfModule(absolutePath, opciones, templates) {

    pdfConfig.opciones = opciones
    pdfConfig.templatesPath = __dirname + '/templates'
    pdfConfig.createdPdfsPath = absolutePath
    cargarTemplates(templates)

    return {
        generarPdf: async (templateName, data) => {
            return crearArchivoPdf(templateName, data);
        }
    }
}

function crearArchivoPdf (template, data) {
    let response;

    try {
        const html = leerTemplate(template);
        const documento = crearDocumento(html, data);

        response = pdf.create(documento, pdfConfig.opciones).then(res => res).catch(error => console.error(error));
    } catch (e) {
        console.error('No se pudo ejecutar la accion: ', e)
    }

    return response;
}

function leerTemplate(template) {
    const path = `${pdfConfig.templatesPath}`;
    const file = `${path}/${template}.html`;

    if (!fs.existsSync(path)) {
        throw Error('El directorio solicitado no existe: ' + path);
    }

    if (!fs.existsSync(file)) {
        throw Error('El template solicitado no existe: ' + template);
    }

    return fs.readFileSync(file, 'utf8');
}

function cargarTemplates(templates) {
    if (!fs.existsSync(pdfConfig.templatesPath)) {
        console.log('Creando la ruta donde se guardaran los templates...')
        fs.mkdirSync(pdfConfig.templatesPath);
    }

    templates.forEach(template => {
        const dir = pdfConfig.templatesPath + '/' +  template.name
        fs.writeFileSync(dir, template.content)
    })

}

function crearDocumento (html, contenido) {
    const fileName = `archivo-${filesCount}.pdf`

    const path = `${pdfConfig.createdPdfsPath}/${fileName}`;
    filesCount++

    if (fs.existsSync(path)) {
        throw Error('Ya existe un archivo con el nombre' + fileName);
    }

    return {
        html,
        path,
        data: contenido
    };
}

module.exports = { createPdfModule };
