import "./css/Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="grid-3070">
                    <div className="grid-50">
                        <img src="/DefenRedLogo_peqW.png" alt="Defenred Logo" />
                        <Link to="/Contacto" id="contactanosFooter">Contáctanos</Link>
                    </div>
                    <div className="iconos-redes">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} color="white" />
                        </a>
                        <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
                            <SiX size={30} color="white" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} color="white" />
                        </a>
                        <a href="https://www.youtube.com/@DEFENRED" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={35} color="white" />
                        </a>
                    </div>
                </div>
                <hr />
                <div>
                    <p>© 2025 Defenred. Todos los derechos reservados.</p>
                    <p>Este sitio web ha sido desarrollado por Sandra y Edu. El contenido, diseño y desarrollo están protegidos por las leyes de propiedad intelectual. Queda prohibida la reproducción total o parcial sin autorización previa.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;