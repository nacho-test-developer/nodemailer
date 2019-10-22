const express = require('express');
const app = express();
const path = require('path');

// La carpeta 'public' es la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server on port 3000');
})