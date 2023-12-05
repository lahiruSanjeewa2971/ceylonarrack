import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Home from './components/home/Home';
import News from './components/news/News';
import FindUs from './components/findus/FindUs';
import Cocktails from './components/cocktails/Cocktails'
import Punch from './components/cocktails/punch/Punch';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News/>} />
        <Route path='/find-us' element={<FindUs/>} />
        <Route path='/cocktails' element={<Cocktails/>} />
        <Route path='/cocktails/punch' element={<Punch/>} />
      </Routes>
    </Router>
  );
}

export default App;
