import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';
import Footer from './components/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar1/> 
      <Footer/>
      <Routes>
          <Route  path='/' element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
