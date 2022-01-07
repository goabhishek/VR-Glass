
import './App.css';

import Navbar from './component/Navbar';

import Home from './pages/Home';

import Footer from './pages/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div>

      <Router >

        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;





