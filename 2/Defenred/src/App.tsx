import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Index from './Index'
import CasaR from './CasaR'
import './components/css/App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Index/>}/>
             <Route path='/casaR' element={<CasaR/>}/> 
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
