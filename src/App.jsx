import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Home from './components/home/Home';
import News from './components/news/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News/>} />
      </Routes>
    </Router>
  );
}

export default App;
