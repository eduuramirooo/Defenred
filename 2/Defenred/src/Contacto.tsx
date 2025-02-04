import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import "./components/css/Formulario.css";

const ContactForm = () => {
  return (
    <>
      <h3>Si tienes alguna pregunta o necesitas más información
        sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.</h3>
      <div className="contact-container">
        <div className="contact-content">

          <div className="contact-form">
            <h2>Formulario de Contacto</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nombre y Apellido</label>
                <input id="name" type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input id="email" type="email" placeholder="tuemail@ejemplo.com" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input id="subject" type="text" placeholder="Asunto del mensaje" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message"></textarea>
              </div>
              <div className="form-grup">
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">Acepto la politica de privacidad y el aviso legal </label>
              </div>
              <div className="derecha">
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">Deseo Suscribirme al Boletín </label>
              </div>
              <button type="submit" className="enviar">Enviar</button>
            </form>
          </div>


          <div className="contact-info">
            <div className="info-section">
              <h2>Información de Contacto</h2>
              <div className="info-item">
                <Mail />
                <a href="mailto:contacto@ejemplo.com" className="color">contacto@ejemplo.com</a>
              </div>
              <div className="info-item">
                <Phone />
                <a href="tel:+34123456789" className="color">+34 123 456 789</a>
              </div>
              <div className="info-item">
                <MapPin />
                <a href="https://www.google.com/maps?q=Calle+Ejemplo,+123,+Ciudad" target="_blank" rel="noopener noreferrer" className="color">Calle</a> 
              </div>
            </div>

            <div className="info-section">
              <h2>Horario de Atención</h2>
              <p>Lunes a Viernes: 9:00 - 21:00</p>
              <p>Sábado: 10:00 - 15:00</p>
              <p>Domingo: Cerrado</p>
            </div>

            <div className="info-section">
              <h2>Redes Sociales</h2>
              <div className="redes">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} />
                </a>
                <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
                  <SiX size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} />
                </a>
                <a href="https://www.youtube.com/@DEFENRED" target="_blank" rel="noopener noreferrer">
                  <FaYoutubeSquare size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mapa">
          <h2>Ubicación</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.23368553596!2d-3.84434439154701!3d40.437837284617764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1738094054052!5m2!1ses!2ses" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      
      </div>
    </>
  );
};

export default ContactForm;
