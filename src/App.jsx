
import './App.module.css'
import Profile  from './components/profile/Profile'
import userData from '../src/userData.json'
import FriendList from './components/FriendList/FriendList';
import friends from '../src/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';



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
      <TransactionHistory items={transactions} />
    </div>
  );
 }



