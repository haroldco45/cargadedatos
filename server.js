const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://tu_url_de_mongodb');

const DataSchema = new mongoose.Schema({}, { strict: false }); // Flexible para cualquier Excel
const DataModel = mongoose.model('ExcelData', DataSchema);

app.post('/upload', async (req, res) => {
    try {
        await DataModel.insertMany(req.body.datos);
        res.status(200).send("Carga completa");
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => console.log('Servidor activo en puerto 3000'));
