import Main from './components/Main'
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
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
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
