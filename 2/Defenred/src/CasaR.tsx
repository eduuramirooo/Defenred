import { Helmet } from 'react-helmet';
import CajasCasas from "./components/CajasCasa";

const CasaR = () => {
      return (
            <>
                  <Helmet>
                        <title>Inicio - Defenred - Casa de Respiro</title>

                        <meta name="description" content="Este Programa de respiro tiene como objetivo el apoyo y 
                        cuidado psicosocial de personas defensoras de derechos humanos 
                        en un entorno natural privilegiado" />
                  </Helmet>
                  <div className="casaR">
                        <h1>Casa de Respiro</h1>
                        <h3>Programa de respiro y formación sobre autocuidado</h3>
                        <CajasCasas />
                        <div className="programa" id="programa">
                              <h3>El PROGRAMA</h3>
                              <div className='derecha'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima ullam saepe iste eveniet natus quidem ab, deserunt adipisci? Aliquam molestiae ex eius placeat. Explicabo illo provident ex esse officia.
                                          Sapiente laboriosam soluta impedit, unde, iste ullam delectus quae quidem velit commodi officiis? Quae odit iure commodi. Temporibus porro tempore eaque fuga reiciendis, repudiandae et explicabo nulla iusto deserunt recusandae?</p>
                                    <img src="/programa.jpg" alt="" />
                              </div>
                        </div>
                        <div className="programa" id="offer">
                              <h3>El PROGRAMA</h3>
                              <div className='izquierda'>
                                    <img src="/programa.jpg" alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima ullam saepe iste eveniet natus quidem ab, deserunt adipisci? Aliquam molestiae ex eius placeat. Explicabo illo provident ex esse officia.
                                          Sapiente laboriosam soluta impedit, unde, iste ullam delectus quae quidem velit commodi officiis? Quae odit iure commodi. Temporibus porro tempore eaque fuga reiciendis, repudiandae et explicabo nulla iusto deserunt recusandae?</p></div>
                        </div>
                        <div className="programa" id="espacio">
                              <h3>El PROGRAMA</h3>
                              <div className='derecha'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima ullam saepe iste eveniet natus quidem ab, deserunt adipisci? Aliquam molestiae ex eius placeat. Explicabo illo provident ex esse officia.
                                          Sapiente laboriosam soluta impedit, unde, iste ullam delectus quae quidem velit commodi officiis? Quae odit iure commodi. Temporibus porro tempore eaque fuga reiciendis, repudiandae et explicabo nulla iusto deserunt recusandae?</p>
                                    <img src="/programa.jpg" alt="" />
                              </div>
                        </div>

                  </div>
            </>
      )
}
export default CasaR;