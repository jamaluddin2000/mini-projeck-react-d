import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Schedule from './component/Schedule'
import Register from './component/Register';
import Admin from './component/Admin';
import Status from './component/Status';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/Admin' element={<Admin />}></Route>
      <Route element={<PrivateRoute />}>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/Schedule' element={<Schedule />}></Route>
      <Route path='/Register' element={<Register />}></Route>
      <Route path='/Status' element={<Status />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
