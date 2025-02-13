import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav id="menu">
        <div className="menu-item">
          <div className="menu-text">
            <Link to="/">Inicio</Link>
          </div>
        </div>
        
        {/* 2 */}
        <div className="menu-item highlight">
          <div className="menu-text">
            <a href="#">¿Que hacemos?</a>
          </div>
          <div className="sub-menu double">
            <div className="icon-box gb a">
              <div className="icon"><i className="far fa-question-circle"></i></div>
              <div className="text">
               <Link to="/casaR"> <div className="title">Casa del respiro <i className="far fa-arrow-right"></i></div></Link>
              </div>
            </div>
            <div className="icon-box gb b">
              <div className="icon"><i className="far fa-users-class"></i></div>
              <div className="text">
                <Link to="/formacion"><div className="title">Formacion <i className="far fa-arrow-right"></i></div></Link>
              </div>
            </div>
            <div className="icon-box gb c">
              <div className="icon"><i className="far fa-school"></i></div>
              <div className="text">
                <div className="title">Publicaciones <i className="far fa-arrow-right"></i></div>
              </div>
            </div>
            <div className="icon-box gb d">
              <div className="icon"><i className="far fa-chess-rook"></i></div>
              <div className="text">
                <Link to={"/enredados"}><div className="title">En-Redados <i className="far fa-arrow-right"></i></div></Link>
              </div>
            </div>
            <div className="icon-box gb e">
              <div className="icon"><i className="far fa-video-plus"></i></div>
              <div className="text">
                <div className="title">Defenred en los medios <i className="far fa-arrow-right"></i></div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="menu-item highlight">
          <div className="menu-text">
            <Link to="defensoras">Defensoras</Link>
          </div>
          <div className="sub-menu triple">
            <div className="top-container gb c icon-box">
              <div className="icon big"><i className="far fa-book"></i></div>
            </div>
          </div>
        </div>
        <div id="sub-menu-container">
          <div id="sub-menu-holder">
            <div id="sub-menu-bottom"></div>
          </div>
        </div>
      </nav>

      <Link to="/Contacto" id="contactanosFooter">Contactanos</Link>
    </>
  );
};

export default Menu;
