import React from 'react'
import s from "./App.module.css";
import Profile from "./components/Profile/Profile"
import user from './components/Profile/user.json'

import Statistics from "./components/Statistics/Statistics";
import statisticData from "./components/Statistics/statistical-data.json";



import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import transactions from './components/TransactionHistory/transaction.json'


const App = () => {
  return (
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
  );
   
};

  export default App;
