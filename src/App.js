import React from 'react'
import s from "./App.module.css"
import Profile from "./components/Profile/Profile"
import FriendList from "./components/Friends/FriendList"
import Statistics from "./components/Statistics/Statistics"
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import friends from './components/Friends/friends.json'
import user from './components/Profile/user.json'
import statisticData from "./components/Statistics/statistical-data.json"
import transactions from './components/TransactionHistory/transaction.json'



const App = () => {
  return (
    <>
    <div className={s.container}>
       <Profile 
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
          

   
       <Statistics stats={statisticData} title={"Upload stats"} />
      <TransactionHistory items={transactions} />
 
    </div>
      <FriendList friends={friends} />,
      </>
  );
   
};

  export default App;
