const fs = require('fs')
const { createPdfModule } = require('../../modulos/pdf-generator');

const opciones = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    "footer": {
        "height": "28mm",
        "contents": {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
}

const pdfCreatorFactory = {
    getPdfCreator: async () => {

        const currentDir = process.cwd()

        const templatesDir = `${currentDir}/src/templates`
        const filesDir = `${currentDir}/src/generated-pdfs`

        const templates = fs.readdirSync(templatesDir).map(fileName => {
            const dir = templatesDir + '/' + fileName
            const content = fs.readFileSync(dir, 'utf-8')
            return {name: fileName, content}
        })

        const pdfCreator = await createPdfModule(filesDir, opciones, templates);
        return pdfCreator;
    },
};

module.exports = pdfCreatorFactory;
