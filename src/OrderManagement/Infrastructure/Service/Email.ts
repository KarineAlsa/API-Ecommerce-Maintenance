import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

import { TransportOptions } from 'nodemailer';

export class NodemailerEmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        let config: TransportOptions = {
            host: process.env.HOST_EMAIL,
            port: process.env.PORT_EMAIL,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.MASTER_KEY
            }
        } as TransportOptions;
        
        this.transporter = nodemailer.createTransport(config);
        console.log(this.transporter)
    }

    async sendEmail(to: string, subject: string, body: string): Promise<void> {

        
        let info = await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text: body 
        });
        console.log(info)
        
    }
}