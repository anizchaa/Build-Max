import Main from './components/Main'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <NavBar />
                <Main />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
