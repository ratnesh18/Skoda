import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Test from './pages/Test'
import Audi from './pages/Audi';

import { BrowserRouter as Router, Route,Routes , Link } from "react-router-dom";
import VimeoPlayer from './pages/VimeoPlayer';
function App() {
  //..
  return (
    <div>
       
      <Router>
      <Routes>
           <Route  exact path="/"  element={<Test/>} /> 
           <Route exact path="audi"  element={<Audi/>} />
           <Route exact path="event"  element={<VimeoPlayer/>} />
        </Routes>
      </Router> 
       
     
      
    </div>
  );
}

export default App;
