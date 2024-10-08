import logo from './logo.svg';
import './App.css';
import Loginpage from './Loginpage';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Loginpage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
