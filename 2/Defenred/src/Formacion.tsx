import { Helmet } from 'react-helmet';

const Formacion = () => {
    return (
        <>
            <Helmet>
                <title>Formación - Defenred - Casa de Respiro</title>
                <meta name="description" content="Formación personalizada desde la práctica para colectivos en base a sus necesidades." />
            </Helmet>
            <div className='formacion'>
                <h1>Formación, los cuidados en el Centro</h1>
                <div className='como'>
                    <h3>¿Cómo es nuestra formación?</h3>
                    <p>Poner los cuidados en el centro es una frase hecha, que decimos mucho en los grupos, pero a la que nos cuesta darle cuerpo. Y la experiencia que tenemos es que no vale con hablar y saber, si no que hay que practicar. El lema que tenemos en la casa es que no queremos hablar sobre cuidados, si no ponerlos en práctica.</p><br />
                    <p>En esa línea, desde hace unos años en <strong>Defenred</strong> venimos intentando sistematizar muchos de los aprendizajes que estamos teniendo en la <strong>Casa de Respiro</strong>, especialmente en lo referente al cuidado en el entorno de las personas y organizaciones <strong>defensoras</strong> de <strong>derechos humanos.</strong></p>
                    <img src="/img/formacion.webp" alt="" width={"400px"} id='intro' />
                </div>
                <div className='teoria'>
                    <h3>La teoría desde la práctica</h3>
                    <h4>Las recetas no valen</h4>
                    <p>Con esto hemos ido elaborando diferentes formaciones para colectivos, partiendo de estas necesidades de cuidado detectadas. Estas formaciones no tienen un corte teórico, porque el autocuidado y el cuidado colectivo no es una receta que podamos aplicar.</p>
                    <p>Cada grupo, cada persona, cada colectivo, es un mundo (literalmente). Cada una parte de una cosmovisión diferente, de unas necesidades de cuidado diferentes, de unos apoyos diferentes.</p>
                    <div className='grid-3'>
                        <img src="/formacionteoria.jpg" alt="" />
                        <img src="/formacionteoria2.jpg" alt="" />
                        <img src="/formacionteoria3.jpg" alt="" />
                    </div>
                </div>
                <div className='grid-50' style={{ gridGap: '1rem' }}>
                    <div className='analisis'>
                        <h3>Análisis-Reflexión-Acción</h3>
                        <h4>Acompañando procesos</h4>
                        <p>Lo que intentamos con estas formaciones es acercarnos a cada grupo, y procurar que estos procesos sean los que el propio grupo puede (y quiere realizar). Partiendo de nuestro esquema de ANÁLISIS-REFLEXIÓN-ACCIÓN intentamos generar procesos de reflexión y acción en cada colectivo. Y serán los propios colectivos los que se planteen qué camino quieren recorrer. Porque solo podemos acompañarlo, ya que es el grupo el que decide cómo, cuándo y por qué.</p>
                        <p>En nuestras experiencias en formaciones hemos acompañado a colectivos ya formados (tanto en el estado español como en Latinoamérica), a colectivos de personas en programas de acogida, a personas de diferentes colectivos que confluyen en un espacio común.... siempre con el objetivo de acompañar procesos de cuidado colectivo.</p>
                    </div>
                    <div className='cuidados'>
                        <h3>Los cuidados que aprendemos</h3>
                        <h4>¿Por qué?</h4>
                        <p>La formación nunca ha sido uno de nuestros objetivos. Ni siquiera ha sido algo buscado, si no algo con lo que nos hemos encontrado en nuestro camino, a raíz de peticiones de personas que han pasado por la Casa o colectivos que conocían nuestra experiencia.</p>
                        <p>El aprendizaje de estos últimos años nos ha llevado a sistematizar nuestros saberes en estas formaciones. Solo pretendemos acompañar procesos desde la experiencia que nos da haber acogido a diferentes personas defensoras. El análisis de los procesos colectivos y las necesidades de cuidado nos permite poder dinamizar estos espacios en los que los propios grupos y personas son las protagonistas de la formación.</p>
                    </div>
                </div>
                <div className='more'>
                    <h3>Algunas de nuestras formaciones</h3>
                    <p>No hacemos formaciones estándar, sino que nos ajustamos a lo que cada grupo necesita. No somos formadores, solo compartimos nuestros aprendizajes.</p>
                </div>
            </div>
        </>
    );
};

export default Formacion;