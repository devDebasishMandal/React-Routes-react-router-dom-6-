// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import {useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import React from 'react';

function App() {

  const[count,setCount]=useState(0);



  return (
    <div className="App"> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About count={count} setCount={setCount}/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact count={count}/>}/>
      </Routes>
    </div>
  );
}

export default App;
