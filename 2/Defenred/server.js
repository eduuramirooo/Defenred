import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';

const app = express();

// Habilitar compresión Gzip
app.use(compression());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Defenred', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const contenidoSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String, // URL o base64 de la imagen
    date: { type: Date, default: Date.now },
});
const Contenido = mongoose.model('contenido', contenidoSchema);



// Agrega esto después de cors()
app.use(express.json());


// Modifica la ruta POST
app.post('/contenido', async (req, res) => {
  try {
    const { title, content, image } = req.body;
    if (!title || !content) { // Hacemos la imagen opcional
      return res.status(400).json({ error: "Title and content are required" });
    }

    const newContenido = new Contenido({
      title,
      content,
      image: image || null, // Guarda null si no hay imagen
      date: new Date()
    });

    await newContenido.save();
    res.status(201).json(newContenido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
