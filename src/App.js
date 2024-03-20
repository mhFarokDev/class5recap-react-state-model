import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Conatct/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/conatct' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
