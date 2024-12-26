import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';
import { useCallback } from 'react';

function SplitDetail() {
  const location = useLocation();
  const { split, currentUser } = location.state;

  const [counter, setCounter] = useState(0);

  // Handlers for counter
  const handleIncrease = () => setCounter(counter + 1);
  const handleDecrease = () => setCounter(counter - 1);

  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    navigate('/split');
  }, [navigate]);

  return (
    <div className="split-detail">
      {/* Left side */}
      <div className="split-details-left">
        <span>Split by</span>
        <h3 className='split-detail-left-user'>{split.ownerUserName}</h3>
        <span className='split-detail-egg-cnt-spn'>{split.totalEggs} <span style={{fontSize: 20, fontWeight: 400, color: '#fff'}}>eggs</span></span>
        <span>created on <span style={{paddingLeft: 5, fontWeight: 500, color: '#CFB08D'}}>{split.createdTime}</span></span>
        <span>Members in the split</span>
        {
          split.members.map((user) => (
            <li key={user} style={{margin: 0, padding: 0, color: '#CFB08D', fontWeight: 500}}>{user}</li>
          ))
        }
      </div>

      {/* Separator Line */}
      <div
        className="separator"
        style={{
          borderLeft: '1px solid #ccc',
          height: '100%',
          margin: '0 auto',
        }}
      ></div>

      {/* Right side */}
      <div className="split-details-right">
        <img src={currentUser.picture || 'https://via.placeholder.com/150'} style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
        <span className='split-details-right-user'>{currentUser.name}</span>
        <span>Add your egg count below</span>
        <div className="counter-div">
          <button onClick={handleDecrease} className='counter-btn'>-</button>
          <span>{counter}</span>
          <button onClick={handleIncrease} className='counter-btn'>+</button>
        </div>
        <Button name = 'Submit' clickFunc={handleSubmit}/>
      </div>
    </div>
  )
}

export default SplitDetail;