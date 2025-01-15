  import Header from './componentes/Header'
import './componentes/css/App.css'
import Slider from './componentes/Slider' 
import Footer from './componentes/Footer'
const App= ()=> {
  const images = [
    {url:'/img/formacion2-800x600.jpg',text:'Quienes somos', index:"who.html" },
    {url:'/img/img2-600x800.jpg', text:'A donde vamos', index:"where.html"},
    {url:'/img/defenred12_filtro-800x533.jpg', text:'Casa del respiro', index:"casaR.html"},
  ];
  return (
    <>
      <Header/>
    {/* <Carrousel/> */}
    <Slider images={images}/>
    <Footer/>
    </>
  )
}

export default App
