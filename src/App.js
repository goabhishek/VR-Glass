
import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Work from './pages/Work';
import Faq from './pages/Faq';
import Footer from './pages/Footer';
import Why from './pages/Why';
import Intro from './pages/Intro';
import News from './pages/News';
import IntroAdd from './pages/Intro-add';

function App() {

  return (
    <div>

      <Router >
        <Navbar />
        <Home />
        <IntroAdd />
        <Features />
        <About />
        <Why />
        <Work />
        <Intro />
        <Faq />
        <News />
        <Footer />
        <Routes>
          <Route path="/Navbar" />
          <Route path="/Home" />
          <Route path="/IntroAdd" />
          <Route path="/Features" />
          <Route path="/About" />
          <Route path="/Why" />
          <Route path="/Work" />
          <Route path="/Intro" />
          <Route path="/Faq" />
          <Route path="/News" />
          <Route path="/Footer" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





