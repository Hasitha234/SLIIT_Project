import { Route } from "react-router"
import Navbar from "./Components/Navbar"
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import About from "./routes/About"
import Services from "./routes/Services"
import { Routes } from "react-router-dom"
function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    
    

    </Routes>
      
    </>
  )
}

export default App
