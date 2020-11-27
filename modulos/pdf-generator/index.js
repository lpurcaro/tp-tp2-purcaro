const pdf = require("pdf-creator-node");
const fs = require('fs');

let pdfConfig = {};

// absolutePath: string - el path donde se van a guardar los archivos generados
// opciones: {format: string, orientation: string, boder: string, footer: {height: string, constents: {first: string, 2: string, default: html, last: string}}}
// template: [{name: string, content: string}]
function createPdfModule(absolutePath, opciones, templates) {

    pdfConfig.opciones = opciones
    pdfConfig.templatesPath = __dirname + '/templates'
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
    const path = `${pdfConfig.templatePath}`;
    const file = `${path}/${template}.html`;

    if (!fs.existsSync(path)) {
        throw Error('El directorio solicitado no existe: ' + path);
    }

    if (!fs.existsSync(file)) {
        throw Error('El template solicitado no existe: ' + template);
    }

    return fs.readFileSync(path, 'utf8');
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

function agregarTemplate (templateName, archivo) {

}

function crearDocumento (html, { documento, contenido }) {
    const path = `${pdfConfig.documentsPath}/${documento.nombre}.pdf`;

    if (fs.existsSync(path)) {
        throw Error('Ya existe un archivo con el nombre' + documento.nombre);
    }

    return {
        html,
        path,
        data: contenido
    };
}

module.exports = { createPdfModule };
