  import Header from './componentes/Header'
import './App.css'
import Carrousel from './componentes/Carrousel' // Fix the import statement to match the case of the filename
import Slider from './componentes/Slider' 
import { text } from 'stream/consumers'
import { url } from 'inspector'
const App= ()=> {
  const images = [
    {url:'https://i.pinimg.com/736x/b2/d9/f0/b2d9f08193c529f8477c5d64b54ec3dc.jpg',text:'Image 1'},
    {url:'https://i.pinimg.com/474x/11/82/06/1182062dab991622e3492a433a15f40d.jpg', text:'Image 2'},
    {url:'https://i.pinimg.com/236x/b5/05/e3/b505e3c747f64248c455c00bb86b8cbf.jpg', text:'Image 3'},
  ];
  return (
    <>
      <Header/>
    {/* <Carrousel/> */}
    <Slider images={images}/>
    </>
  )
}

export default App
