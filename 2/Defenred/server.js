import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Defenred', {
});

const contenidoSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});

const Contenido = mongoose.model('contenido', contenidoSchema);

app.post('/contenido', async (req, res) => {
  try {
    const newContenido = new Contenido(req.body);
    await newContenido.save();
    res.status(201).json(newContenido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/contenido', async (req, res) => {
  try {
    const contenidos = await Contenido.find();
    res.json(contenidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
