// client/src/Formulario.tsx
import React, { useState } from 'react';
import './css/formStyles.css';

interface FormState {
  nombre: string;
  email: string;
  mensaje: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/enviar-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error en la solicitud');
      
      alert('Datos enviados exitosamente!');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar los datos');
    }
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default Formulario;