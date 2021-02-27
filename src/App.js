import React from 'react'
import Profile from "./components/Profile/Profile"
import user from './components/Profile/user.json'

import Statistics from "./components/Statistics/Statistics";
import statisticData from "./components/Statistics/statistical-data.json";



import TransactionHistory from './components/TransactionHistory/TransactionHistory'






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
          

   
       <Statistics stats={statisticData} title={"Upload stats"} />
      <TransactionHistory/>
     </div>
  );
   
};

  export default App;
