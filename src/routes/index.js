const { Router } = require('express');
const router = Router();

// resolver lo que una petición hace en esta ruta
router.post('/send-email', (req, res) => {
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
    res.send(contentHTML);
})

module.exports = router;