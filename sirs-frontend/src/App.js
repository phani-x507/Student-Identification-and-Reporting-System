import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './Loginpage';
import Adminpanel from './Adminpanel';
import Identifiedfaces from './Identifiedfaces';
import History from './History';
import Getdetails from './Getdetails';
import Unidentifiedfaces from './Unidentifiedfaces';
import {Routes,Route,BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div style={{'font-family': "'Open Sans', sans-serif"}} >
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Loginpage />}></Route>
      <Route path='/adminpanel' element={<Adminpanel />}></Route> 
      <Route path='/identifiedfaces' element={<Identifiedfaces />}></Route> 
      <Route path='/history' element={<History />}></Route> 
      <Route path ='/getdetails' element ={<Getdetails />}></Route>
      <Route path='/unidentifiedfaces' element={<Unidentifiedfaces />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
