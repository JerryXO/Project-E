import  '../App.css';


function Profile() {
  const currentUser = {
    userName: 'Neeraj',
    email: 'neeraj@yopmail.com',
  };

  return (
    <div className="profile div">
      <h3>{currentUser.userName}</h3>
    </div>
  )
}

export default Profile;