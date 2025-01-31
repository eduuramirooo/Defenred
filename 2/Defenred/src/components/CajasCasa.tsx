import './css/CajasCasa.css';

const CajasCasas = () => {
  return (
    <>
      <div className="page-content">
          <div className="card">
            <div className="content"><a href="#programa">
              <h2 className="title">El Programa</h2>
              <p className="copy">«Necesidad de Autocuidado»</p></a>
            </div>
      </div>
      <div className="card">
        <div className="content"><a href="#offer">
          <h2 className="title">Qué Ofrecemos</h2>
          <p className="copy">«Un periodo de Respiro»</p></a>
        </div>
      </div>
     <div className="card">
        <div className="content"> <a href="#espacio">
          <h2 className="title">El Espacio</h2>
          <p className="copy">Mucho más que un lugar de descanso.</p></a>
        </div>
      </div>
    </div >

    </>
    );
}
export default CajasCasas;