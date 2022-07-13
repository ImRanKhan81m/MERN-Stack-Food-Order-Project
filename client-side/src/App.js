
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar setDark={setDark} dark={dark}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
