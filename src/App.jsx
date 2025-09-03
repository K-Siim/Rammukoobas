import { Routes, Route,  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';  
import Gallery from './Pages/Gallery';
import Squad from './Pages/Squad';
import Prices from './Pages/Prices';
import Merch from './Pages/Merch';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';




function App() {
  return (
    <div
      className="min-h-screen"
        style={{
    backgroundImage: "url('/logo.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "120px 120px",
    filter: "opacity(0.91) " 
  }}
    >
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/squad" element={<Squad />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App
