import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Homepenyewa from "./pages/homepenyewa";
import Myprofile from "./pages/myprofile";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/homepenyewa" element={<Homepenyewa/>}/>
          <Route path="/myprofile" element={<Myprofile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;