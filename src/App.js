import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UseRefExample1 from './components/UseRefExample1'

function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/useref-example-1' element={<UseRefExample1 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
