import "./css/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="grid-3070">
                    <div className="grid-50">

                        <img src="/DefenRedLogo_peqW.png" alt="" />
                        <Link to="/Contacto" id="contactanosFooter">Contactanos</Link>
                    </div>



                </div>
                <hr />
                <div >
                        <p>© 2025 Defenred. Todos los derechos reservados.</p>
                        <p>Este sitio web ha sido desarrollado por Sandra y Edu. El contenido, diseño y desarrollo están protegidos por las leyes de propiedad intelectual. Queda prohibida la reproducción total o parcial sin autorización previa.</p>
                    </div>
            </footer>
        </>
    )
}
export default Footer; 
