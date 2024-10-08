import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Split from './components/Split';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcount" element={<Signup/>} />
        <Route path="/split" element={<Split/>} />
      </Routes>
    </Router>
  )
}

export default App
