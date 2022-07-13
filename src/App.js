import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Test from './pages/Test'
import Audi from './pages/Audi';
import { BrowserRouter as Router, Route,Routes , Link } from "react-router-dom";
import VimeoPlayer from './pages/VimeoPlayer';
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

function App() {
  //..
  return (
    <div>
       
      <Router history={customHistory}  >
      <Routes>
           
           <Route exact path="audi"  element={<Audi/>} />
           <Route exact path="event"  element={<VimeoPlayer/>} />
           <Route  exact path="/"  element={ <Test />} /> 
        </Routes>
      </Router> 
       
    </div>
  );
}

export default App;
