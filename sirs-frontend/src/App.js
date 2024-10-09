import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './Loginpage';
import Adminpanel from './Adminpanel';
import Identifiedfaces from './Identifiedfaces';
import Unidentfiedfaces from './Unidentfiedfaces';
import History from './History';
import Getdetails from './Getdetails';
import {Routes,Route,BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Loginpage />}></Route>
      <Route path='/adminpanel' element={<Adminpanel />}></Route> 
      <Route path='/identifiedfaces' element={<Identifiedfaces />}></Route> 
      <Route path='/unidentifiedfaces' element={<Unidentfiedfaces />}></Route> 
      <Route path='/history' element={<History />}></Route> 
      <Route path ='/getdetails' element ={<Getdetails />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
