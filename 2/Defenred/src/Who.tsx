import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
function Who() {
    return (
        <>
            <Helmet>
                <title>Quiénes Somos - Protección y Tu Red de Derechos</title>
                <meta name="description" content="Conoce a DEFENRED, tu ONG dedicada a la defensa y 
                unir los derechos humanos. Descúbrenos para proteger a las personas forzadas a huir." />
            </Helmet>
            <div className="who">
                <div className='banner'>
                    <div className='texto'>
                        <h1 >Conocenos más en este artículo de El País</h1>
                        <div className='grid-50'>
                            <Link to="https://elpais.com/america-futura/2022-12-13/un-oasis-en-madrid-para-que-los-defensores-de-derechos-humanos-recuperen-el-aliento.html">Miralo</Link>
                            <a href="#bloquebajo">Miralo</a>
                        </div>
                    </div>
                </div>
                <div id='bloquebajo'>
                <h3>
                    Conoce a DEFENRED, tu ONG dedicada a la defensa y unir los
                    derechos humanos.Descúbrenos para proteger a las personas
                    forzadas a huir.
                </h3>

                <p>
                    Misión en <b>DEFENRED</b>, nacimos con el firme propósito de apoyar a los
                    defensores y defensoras de derechos humanos en su labor crucial de
                    crear un mundo más justo. Nuestro objetivo es apoyar su trabajo para el
                    desarrollo justo e igualitario de sus comunidades.
                    Visión hay que apoyar a los defensores de derechos humanos, mientras
                    estamos mejoramos la situación de todas las personas y comunidades que
                    se benefician de su labor. Aspiramos a un lugar donde los derechos
                    humanos sean respetados por y para todos.
                </p>


                <p>
                    Historia y Proyectos desde Defenred, nos hemos estado dedicando a la
                    defensa y también a impulsar los derechos humanos. Nuestra Casa de
                    Respiro, ofrece a defensores de derechos humanos un espacio para
                    descansar y recuperarse física y emocionalmente, permitiéndoles
                    continuar su valiosa labor de manera más saludable.
                    Nuestro equipo está compuesto por profesionales y apasionados por los
                    derechos humanos. Trabajamos incansablemente para proporcionar
                    apoyo integral a quienes lo necesitan.
                </p>
                <div className='grid3' style={{marginTop:"2%"}}>
                    <img src="/img/who3.jpg" alt="" />
                    <img src="/img/who1.jpg" alt="" />
                    <img src="/img/who.jpg" alt="" />
                    <h2>Carmen Peralta</h2>
                    <h2>Loreto Rodríguez de Rivera</h2>
                    <h2>Víctor Arias</h2>
                </div>
                </div>
            </div>
        </>
    )
}
export default Who