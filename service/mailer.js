const nodemailer = require('nodemailer');

class Mailer {
	constructor(host, port = 465, secure = true, auth, from = 'Nombre Compañía') {
		this.host = host;
		this.port = port;
		this.secure = secure;
		this.auth = auth;
		this.from = from;
		this.transporter = null;
		this.setTransporter();
	}

	setTransporter() {
		this.transporter = nodemailer.createTransport({
			host: this.host,
			port: this.port,
			secure: this.secure,
			auth: this.auth
		});
	}

	sendWelcomeMail(to, subject = 'Correo de Bienvenida', html) {
		const mailOptions = {
			from: this.from,
			to,
			subject,
			html
		};
		this.transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return {
					status: false,
					msg: 'No se pudo enviar correo...',
					error
				};
			}
			return {
				status: true,
				msg: 'Correo enviado...',
				info: info.messageId
			};
		});
	}
}

module.exports = Mailer;
