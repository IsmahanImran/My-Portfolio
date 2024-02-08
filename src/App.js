import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
       <Navbar />
      <div className = "container">
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
