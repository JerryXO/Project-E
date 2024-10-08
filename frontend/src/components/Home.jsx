import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import Button from './Button';
import '../App.css';

function Home() {
  /**
   * 1. Make an API call everytime to check any active split exists or not
   * 2. Get the active split details i.e createdon, username, email
   */
  let activeSplit = false;
  const activeSplitDetails = {
    splitid: 1, 
    username: 'User A',
    status: 1,
    email: 'user1@yopmail.com',
    createdon: '10-10-2024'
  }

  // if(activeSplitDetails.status) {
  //   activeSplit = true
  // }

  const navigate = useNavigate();

  const handleCount = useCallback(() => {
    navigate('/addcount');
  }, [navigate]);

  const handleSplit = useCallback(() => {
    navigate('/split');
  }, [navigate]);

  return (
    <div className="main-page">
      <h3 className='title'>Welcome Nigga</h3>
      <p className='desc'>Add your count or be a gay!</p>
      {
        activeSplit ? 
        <div className='btn-div'>
          <p className='split-desc'>Split created by {activeSplitDetails.username} on {activeSplitDetails.createdon}</p>
          <Button name='Add count' clickFunc={handleCount} /> 
        </div>
        :
        <div className="grid-div">
          <Button name='Add count' clickFunc={handleCount} />
          <Button name='Split' clickFunc={handleSplit} />
        </div>
      }
    </div>
  )
}
export default Home