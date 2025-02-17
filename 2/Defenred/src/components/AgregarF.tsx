import React, { useState } from 'react';

interface ContenidoFormState {
    title: string;
    content: string;
    image: string | null; // Ahora almacenamos la imagen como Base64
    imagePreview: string | null;
    loading: boolean;
    error: string;
}

const ContenidoForm: React.FC = () => {
    const [formState, setFormState] = useState<ContenidoFormState>({
        title: '',
        content: '',
        image: null,
        imagePreview: null,
        loading: false,
        error: ''
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormState(prev => ({
                    ...prev,
                    image: reader.result as string, // Esto ya es base64
                    imagePreview: reader.result as string
                }));
            };
            reader.readAsDataURL(file); // Esto convierte la imagen a base64
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { title, content, image } = formState;
    
        if (!title || !content) {
            setFormState(prev => ({ ...prev, error: 'Title and content are required' }));
            return;
        }
    
        console.log("Datos a enviar:", { title, content, image });
    
        try {
            setFormState(prev => ({ ...prev, loading: true, error: '' }));
    
            const data = {
                title,
                content,
                image: image || null, // Asegurar que no sea undefined
                date: new Date().toISOString()
            };
    
            const response = await fetch('http://localhost:5000/contenido', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
    
            const result = await response.json();
            console.log("Respuesta del servidor:", result);
    
            if (!response.ok) throw new Error(result.message || 'Error saving content');
    
            setFormState({
                title: '',
                content: '',
                image: null,
                imagePreview: null,
                loading: false,
                error: ''
            });
    
        } catch (err) {
            console.error("Error al enviar:", err);
            setFormState(prev => ({
                ...prev,
                loading: false,
                error: err instanceof Error ? err.message : 'Unknown error'
            }));
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    id="title"
                    value={formState.title}
                    onChange={(e) => setFormState(prev => ({ ...prev, title: e.target.value }))}
                    disabled={formState.loading}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="content">Contenido:</label>
                <textarea
                    id="content"
                    value={formState.content}
                    onChange={(e) => setFormState(prev => ({ ...prev, content: e.target.value }))}
                    disabled={formState.loading}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="image">Imagen:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={formState.loading}
                />
                {formState.imagePreview && (
                    <div className="image-preview">
                        <img
                            src={formState.imagePreview}
                            alt="Preview"
                            style={{ maxWidth: '200px', marginTop: '10px' }}
                        />
                    </div>
                )}
            </div>

            {formState.error && <div className="error-message">{formState.error}</div>}

            <button
                type="submit"
                disabled={formState.loading}
                className="submit-button"
            >
                {formState.loading ? 'Enviando...' : 'Guardar Contenido'}
            </button>
            <style>{`
    .form-container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .error-message {
      color: red;
      margin: 10px 0;
    }
    .submit-button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .submit-button:disabled {
      background-color: #cccccc;
    }
  `}</style>
        </form>
    );
};

export default ContenidoForm;
