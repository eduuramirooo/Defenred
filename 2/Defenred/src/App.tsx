import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Index from './Index'
import CasaR from './CasaR'
<<<<<<< Updated upstream
import Who from './Who'
=======
import Contacto from './Contacto'
>>>>>>> Stashed changes
import './components/css/App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Index/>}/>
             <Route path='/casaR' element={<CasaR/>}/> 
<<<<<<< Updated upstream
             <Route path='who' element={<Who/>}></Route>
             <Route path='*' element={<h1>Not Found</h1>}/>
=======
             <Route path='/Contacto' element={<Contacto/>}/> 
>>>>>>> Stashed changes
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
