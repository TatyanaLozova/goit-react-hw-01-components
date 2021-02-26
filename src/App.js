import React from 'react'
import Profile from "./components/Profile/Profile"
import user from './components/Profile/user.json'

import Statistics from "./components/Statistics/Statistics";

import TransactionHistory from './components/TransactionHistory/TransactionHistory'




// import friends from "./components/Friends/FriendList"
// import FriendList from './components/Friends/friends.json'


const App = () => {
  return (
     <div>
       <Profile 
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
          

      {/* <FriendList friends={friends} />, */}
      <Statistics />
      <TransactionHistory/>
     </div>
  );
   
};

  export default App;
