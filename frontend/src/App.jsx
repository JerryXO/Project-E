import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Split from './components/Split';
import SplitDetail from './components/SplitDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcount" element={<Signup/>} />
        <Route path="/split" element={<Split/>} />
        <Route path="/split/:splitId" element={<SplitDetail/>} />
      </Routes>
    </Router>
  )
}

export default App
