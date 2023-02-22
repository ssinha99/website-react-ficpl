import './App.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Footer from './MyComponents/Footer';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import Mechanical from './MyComponents/Mechanical';
import Electrical from './MyComponents/Electrical';
import Construction from './MyComponents/Construction';
import OurClients from './MyComponents/OurClients';
import Error from './MyComponents/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Mechanical' element={<Mechanical />}/>
          <Route path='/Electrical' element={<Electrical/>}/>
          <Route path='/Construction' element={<Construction/> }/>
          <Route path='/OurClients' element={<OurClients />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
        

        <Footer/>
      </Router> 
    </>
  );
}

export default App;
