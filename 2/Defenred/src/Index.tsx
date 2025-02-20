import React, { useEffect, useState } from 'react';
import Slider from './components/Slider';
import { Helmet } from 'react-helmet';

interface Contenido {
  _id: string;
  title: string;
  content: string;
  image: string; // Nueva propiedad para la imagen
  date: Date;
}

const Index: React.FC = () => {
  const [contenidos, setContenidos] = useState<Contenido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const images = [
    { url: '/img/formacion2-800x600.jpg', text: 'Quienes somos', index: '/who' },
    { url: '/img/img2-600x800.jpg', text: 'A donde vamos', index: '/where' },
    { url: '/img/defenred12_filtro-800x533.jpg', text: 'Casa del respiro', index: '/casaR' },
  ];

  const fetchContenidos = async () => {
    try {
      const response = await fetch('http://localhost:5000/contenido');
      if (!response.ok) throw new Error('Error al obtener los contenidos');
      const data = await response.json();
      const sortedData = data.sort((a: Contenido, b: Contenido) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setContenidos(sortedData.slice(0, 3));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContenidos();
  }, []);

  return (
    <>
      <Helmet>
        <title>Inicio - Defenred - Casa de Respiro</title>
        <meta name="description" content="La Casa de Respiro de DEFENRED ofrece a los defensores de los derechos 
        humanos período de descanso para autocuidado." />
      </Helmet>

      <div className="main">
        <Slider images={images} />
        <h1>El proyecto</h1>
        <h2>Casa de respiro</h2>
      </div>
    </>
  );
};

export default Index; 