const { crearEmailSender } = require("../../modulos/NodeJsEmailSenderModule");
require("dotenv").config();

const config = {
    type: "nodemailer",
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
};

const mailerFactory = {
    getMailer: async () => {
        const mailer = await crearEmailSender(config);
        return mailer;
    },
};

module.exports = mailerFactory;
