import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Home from './components/home/Home';
import News from './components/news/News';
import FindUs from './components/findus/FindUs';
import Cocktails from './components/cocktails/Cocktails'
import Punch from './components/cocktails/punch/Punch';
import Tasting from './components/cocktails/tasting/Tasting';
import Infusions from './components/cocktails/infusions/Infusions';
import OurArrack from './components/ourArrack/OurArrack';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourarrack' element={<OurArrack/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/find-us' element={<FindUs/>} />
        <Route path='/cocktails' element={<Cocktails/>} />
        <Route path='/cocktails/punch' element={<Punch/>} />
        <Route path='/cocktails/tasting' element={<Tasting/>} />
        <Route path='/cocktails/infusions' element={<Infusions/>} />
      </Routes>
    </Router>
  );
}

export default App;
