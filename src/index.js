const express = require('express');
const app = express();
const path = require('path');

// permitir al servidor entender los datos que se reciben.
app.use(express.urlencoded({extended: false}));
// permitir al servidor entender datos json que recibe
app.use(express.json());

// Routes
app.use(require('./routes/index'));

// La carpeta 'public' es la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server on port 3000');
})