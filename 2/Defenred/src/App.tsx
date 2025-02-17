import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Index from './Index'
import CasaR from './CasaR'
import Who from './Who'
import Contacto from './Contacto'
import Formacion from './Formacion'
import Enredados from './Enredados'
import DondeVamos from './DondeVamos'
import Defensoras from './Defensoras'
import ContenidoForm from './components/AgregarF';
import './components/css/App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Index />} />
            <Route path='/casaR' element={<CasaR />} />
            <Route path='who' element={<Who />}></Route>
            <Route path='*' element={<h1>Not Found</h1>} />
              <Route path='enredados' element={<Enredados/>}></Route>
              <Route path='defensoras' element={<Defensoras />}></Route>
            <Route path='where' element={<DondeVamos />}></Route>
              <Route path='contacto' element={<Contacto />}></Route>
            <Route path='formacion' element={<Formacion />}></Route>
            <Route path='agregarF' element={<ContenidoForm/>}></Route>
           
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
