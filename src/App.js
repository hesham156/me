import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Login from './component/Login';
import Naveg from './component/Naveg.js';
import Admin from './component/Admin';

function App() {

  
 
  return (
    <>
                <Naveg/>
                

    <Router>
    <Routes>
      <Route path="/*" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin/*" element={<Admin/>} />


    </Routes>
    </Router>
    
    </>
  );
}

export default App;
