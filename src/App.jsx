import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './home.jsx'
import About from './about.jsx'
import Dashboard from './dashboard.jsx'
import Settings from './settings.jsx'
import Navbar from './Navbar.jsx'
import Contacts from './Contacts.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
