
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Work from './Components/Work';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>  
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;