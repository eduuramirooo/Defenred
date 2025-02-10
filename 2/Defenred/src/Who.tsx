import { Helmet } from 'react-helmet';
function Who() {
    return (
        <>
            <Helmet>
                <title>Quiénes Somos - Protección y Tu Red de Derechos</title>
                <meta name="description" content="Conoce a DEFENRED, tu ONG dedicada a la defensa y 
                unir los derechos humanos. Descúbrenos para proteger a las personas forzadas a huir." />              
            </Helmet>
            <div className="who">
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
            </div>
        </>
    )
}
export default Who