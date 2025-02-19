import { useEffect, useState } from 'react';
import './css/ListaUsuarios.css';

interface User {
  _id: string;
  nombre: string;
  email: string;
  asunto?: string;
  mensaje: string;
  fechaCreacion: Date;
}

const ListarUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/usuarios');
        if (!response.ok) throw new Error('Error al obtener usuarios');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="loading">Cargando usuarios...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="usuarios-container">
      <h2 className="titulo">Usuarios Registrados ({users.length})</h2>
      
      <div className="grid-usuarios">
        {users.map((user) => (
          <div key={user._id} className="usuario-card">
            <div className="usuario-info">
              <h3 className="usuario-nombre">{user.nombre}</h3>
              <p className="usuario-email">{user.email}</p>
            </div>

            {user.asunto && (
              <div className="usuario-asunto">
                <p className="subtitulo">Asunto:</p>
                <p className="texto">{user.asunto}</p>
              </div>
            )}

            <div className="usuario-mensaje">
              <p className="subtitulo">Mensaje:</p>
              <p className="texto-italico">"{user.mensaje}"</p>
            </div>

            <div className="usuario-fecha">
              <p className="fecha-texto">
                Registrado el: {new Date(user.fechaCreacion).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <div className="sin-usuarios">No hay usuarios registrados</div>
      )}
    </div>
  );
};

export default ListarUser;