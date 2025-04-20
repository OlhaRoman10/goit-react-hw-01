
import './App.module.css'
import Profile  from './components/profile/Profile'
import userData from '../src/userData.json'
import FriendList from './components/FriendList/FriendList';
import friends from '../src/friends.json';


export default function App() {
  return (
      <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}



