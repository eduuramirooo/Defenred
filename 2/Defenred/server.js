import express, { json } from 'express';
import mongoose from 'mongoose'; // Importa mongoose directamente
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware (sin body-parser)
app.use(cors());
app.use(json()); // ¡Reemplazamos bodyParser.json()!

// Conexión a MongoDB (igual)
mongoose.connect('mongodb://localhost:27017/Defenred', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión:', err));

// Modelo Mongoose actualizado
const formDataSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  asunto: String,
  mensaje: { type: String, required: true },
  aceptaPolitica: Boolean,
  boletin: Boolean
});

const FormData = mongoose.model('FormData', formDataSchema);

app.get('/api/usuarios', async (req, res) => {
  try {
    const users = await FormData.find().sort({ fechaCreacion: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});
// Ruta actualizada
app.post('/api/enviar-formulario', async (req, res) => {
  try {
    const { nombre, email, asunto, mensaje, aceptaPolitica, boletin } = req.body;
    
    const nuevoDato = new FormData({
      nombre,
      email,
      asunto,
      mensaje,
      aceptaPolitica: aceptaPolitica || false,
      boletin: boletin || false,
      fechaCreacion: { type: Date, default: Date.now }
    });

    await nuevoDato.save();
    res.status(201).json({ mensaje: 'Datos guardados exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});