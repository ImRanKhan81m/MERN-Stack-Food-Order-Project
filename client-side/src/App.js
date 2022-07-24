
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About/About';
import Popular from './Components/Popular/Popular';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/Order';
import Blog from './Components/Blog/Blog';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';

function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    AOS.init();
  }, [])
   
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar setDark={setDark} dark={dark} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/popular' element={<Popular />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Order />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
