import { Helmet } from 'react-helmet';
function DondeVamos() {
  return (
    <>
      <Helmet>
        <title>¿Por qué este proyecto? - Defenred - Casa de Respiro</title>
        <meta name="description" content="¿Por qué este proyecto? Motivación y valores 
        Defender los DDHH es algo peligroso" />
      </Helmet>
      <div className="wherewe">
        <h1>¿POR QUÉ ESTE PROYECTO?</h1>
        <h2>Apoyo necesario</h2>
        <h2>Mejoramos todas</h2>
        <div className="grid-2">
          <p>Es necesario apoyar el trabajo de estas personas. Los <strong>defensores</strong> y <strong>defensoras</strong> de
            derechos humanos son piezas clave para el desarrollo de su entorno de una manera
            justa e igualitaria. Suelen tener un profundo conocimiento de sus realidades. Y por
            la influencia en sus comunidades, son los que pueden generar mecanismos de
            cambio y alternativas para mejorar la situación de derechos humanos.</p>
          <p>El objetivo de nuestro grupo es reforzar su labor, atendiendo a algunas de las
            necesidades señaladas. Si apoyamos a los defensores y defensoras, lo estaremos
            haciendo a todas las personas y comunidades que se benefician de su trabajo por
            los derechos humanos. Y estaremos mejorando la situación de derechos humanos de
            todas ellas.</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis et quae fugiat officiis modi, dolores ipsa. Minima labore molestiae quas cumque delectus enim sed rem a omnis, in quae.</p>
        <img src="/img/where.png" alt="" />
      </div>
    </>
  );
}
export default DondeVamos;