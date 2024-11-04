import { promises as fs } from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import nodemailer from 'nodemailer';
const env = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
    }
});

type SendEmailOptions = {
    to: string;
    subject: string;
    text: string;
    template?: object;
    templateName: string;
}

export class EmailService {
    static getTemplatePath(templateName: string){
        return path.resolve(`src/emails/${templateName}.html`);
    }
    static async sendEmail(options: SendEmailOptions) {
        try {
            const htmlPath = this.getTemplatePath(options.templateName);
            const htmlTemplate = await fs.readFile(htmlPath, 'utf-8');
            const template = Handlebars.compile(htmlTemplate);
            const htmlContent = template(options.template);
            const mailOptions = {
                from: env.EMAIL_USER,
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: htmlContent,
            };
            const info = await transporter.sendMail(mailOptions);
            console.log('Email отправлен: %s', info.messageId);
        } catch (error) {
            console.error('Ошибка при отправке email:', error);
        }
    }
}