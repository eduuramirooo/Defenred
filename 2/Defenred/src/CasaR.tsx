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
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur dolorem eaque. Aspernatur perspiciatis cupiditate atque voluptatibus provident iure, expedita amet temporibus, aperiam, ab fugit ad? Explicabo velit perspiciatis veritatis!</p>
                              <img src="/programa.jpg" alt="" />
                        </div>
                        <div className="programa" id="offer">
                              <h3>El PROGRAMA</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur dolorem eaque. Aspernatur perspiciatis cupiditate atque voluptatibus provident iure, expedita amet temporibus, aperiam, ab fugit ad? Explicabo velit perspiciatis veritatis!</p>
                              <img src="/programa.jpg" alt="" />
                        </div>
                        <div className="espacio" id="espacio">
                              <h3>El PROGRAMA</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur dolorem eaque. Aspernatur perspiciatis cupiditate atque voluptatibus provident iure, expedita amet temporibus, aperiam, ab fugit ad? Explicabo velit perspiciatis veritatis!</p>
                              <img src="/programa.jpg" alt="" />
                        </div>

                  </div>
            </>
      )
}
export default CasaR;