import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Conatct/Contact';
import Header from './components/Header/Header';
import About from './Pages/About/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/conatct' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
