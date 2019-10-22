const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

// resolver lo que una petición hace en esta ruta
router.post('/send-email', async (req, res) => {
    // datos que se envían
    // console.log(req.body);

    // Guardo en una constante lo que recibo del body
    const { name, email, phone, message } = req.body;

    // Formato del contenido a enviar por email
    contentHTML = `
        <h1>User</h1>
        <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `

    // Configuración del server SMTP
    const transporter = nodemailer.createTransport({
        host: 'in-v3.mailjet.com',
        port: 587,
        secure: false,
        auth: {
            user: '7b92c94753f5e435684fdcbb9e6202d5',
            pass: '50232ac549ca9464b9af0104320a289f'
        }
    });

    // Composición del email que se envía
    const info = await transporter.sendMail({
        from: 'Yoelnacho <mi@mail.com>',
        to: 'yoelnacho@gmail.com',
        subject: 'Nodemailer test',
        text: 'hello world'
    });

    console.log('eh: ', info.messageId);
    //res.send('recibido');
    res.redirect('/success.html');
})

module.exports = router;