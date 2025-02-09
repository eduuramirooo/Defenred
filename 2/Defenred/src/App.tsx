import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Index from './Index'
import CasaR from './CasaR'
import Who from './Who'
import Contacto from './Contacto'
import Formacion from './Formacion'
import './components/css/App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Index/>}/>
             <Route path='/casaR' element={<CasaR/>}/> 
             <Route path='who' element={<Who/>}></Route>
             <Route path='*' element={<h1>Not Found</h1>}/>
             <Route path='contacto' element={<Contacto/>}></Route>
             <Route path='formacion' element={<Formacion/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
