import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Split from './components/Split';
import SplitDetail from './components/SplitDetail';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState } from 'react';

const clientId = '1058545343004-ue70ila63mt50aqtetgs152l5dtjtbuk.apps.googleusercontent.com';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Google login successful', credentialResponse);
    setUser(credentialResponse);
  };

  const handleLoginError = () => {
    console.log('Google login failed');
  };

  const handleLogout = () => {
    setUser(null); // Reset user state on logout
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Home user={user} onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />} />
          <Route path="/addcount" element={<Signup />} />
          <Route path="/split" element={<Split  onLogout={handleLogout}/>} />
          <Route path="/split/:splitId" element={<SplitDetail />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
