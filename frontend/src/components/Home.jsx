import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import '../App.css';

function Home({ user, onLoginSuccess, onLoginError }) {
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const curr = new Date().getUTCDay();

  const navigate = useNavigate();
  const handleLogin = useCallback(() => {
    navigate('/split');
  }, [navigate]);

  return (
    <div className="main-page">
      <h3 className='title'>Happy <span className='home-spn'>{weekdays[curr]}!</span></h3>
      <p className='desc'>Add your splits or count</p>
      <div className="btn-div">
      {
        user ? (
          <Button name='Go to Dashboard' clickFunc={handleLogin} />
        ) : (
          <GoogleLogin 
            onSuccess={onLoginSuccess} 
            onError={onLoginError} 
          />
      )}
      </div>
    </div>
  )
}
export default Home