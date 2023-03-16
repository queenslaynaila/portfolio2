import { React} from "react";
import './index.css';
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/ Home'
import Experiences from './components/Experiences/Experience'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/skills'
import Contact from './components/Contact/Contact'
function App() {
  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experience' element={<Experiences/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;

