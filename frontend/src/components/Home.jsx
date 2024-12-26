import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import '../App.css';

function Home() {
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const curr = new Date().getUTCDay();

  const navigate = useNavigate();
  const handleLogin = useCallback(() => {
    navigate('/split');
  }, [navigate]);

  const isLoggedIn = false;
  return (
    <div className="main-page">
      <h3 className='title'>Happy <span className='home-spn'>{weekdays[curr]}!</span></h3>
      <p className='desc'>Add your splits or count</p>
      <div className="btn-div">
      {
          isLoggedIn ? (
            <Button name='Go to Dashboard' clickFunc={handleLogin} />
          ) : (
            <Button name='Sign up with Google' clickFunc={handleLogin} />
          )
        }
      </div>
    </div>
  )
}
export default Home