
import Index from './Index.tsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App= ()=> {
  return (
    <>
<Router>
    <Routes>
      <Route path='/' element={Index}>
        
      </Route>
    </Routes>

</Router>

    </>
  )
}

export default App