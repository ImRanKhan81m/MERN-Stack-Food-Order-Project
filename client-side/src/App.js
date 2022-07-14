
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-theme={dark ? "light" : "dark"}>
      <Navbar setDark={setDark} dark={dark} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
