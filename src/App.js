import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HM from './components/HM'
import LB from './components/LB';
import HMContextProvider from './contexts/HMContext';
import HMContext from './contexts/HMContext';

// import Dorathy from './img/Dorathy.jpg'
// import Laycon from './img/Laycon.jpg'
// import Kidd from './img/Kidd.png'
// import Nengi from './img/Nengi.jpg'
// import Ozo from './img/Ozo.jpg'
// import Vee from './img/Vee.jpg'

function App() {
//   const [totalVotes, setTotalVotes] = useState(10);
//   const [voteCasted, setVoteCasted] = useState(0)
//   const [users, setUsers] = useState([
//     {
//         name: "Laycon",
//         pic: Laycon,
//         title: '85m Drumstick',
//         votes: 0
//     },
//     {
//         name: "Dorathy",
//         pic: Dorathy,
//         title: 'Ahem',
//         votes: 0
//     },
//     {
//         name: "Kiddwaya",
//         pic: Kidd,
//         title: 'Big Brother',
//         votes: 0
//     },
//     {
//         name: "Nengi",
//         pic: Nengi,
//         title: 'Si',
//         votes: 0
//     },
//     {
//         name: "Vee",
//         pic: Vee,
//         title: 'Baby Girl',
//         votes: 0
//     },
//     {
//         name: "Ozo",
//         pic: Ozo,
//         title: 'Ozuo, Smh!',
//         votes: 0
//     }
// ])

//   const decrementValue = (item) =>{
//     if(item.votes === 0){
//         console.log('cant decrement')
//     }else{
//         item.votes -= 1;

//         const newUsers = updateUser(item)

//         setVoteCasted(voteCasted - 1);
//         setTotalVotes(totalVotes + 1)
//         setUsers(newUsers)
//     }
// }

// const updateUser = (item) =>{
//  return users.map(user => {
//     if(user.name == item.name){
//       return item
//     }else{
//       return user
//     }
//   })
// }


// const incrementValue = (item) =>{
//     if(totalVotes === 0){
//         console.log('no more votes available')
//     }else{
//         item.votes += 1
//         const newUsers = updateUser(item)
//         setVoteCasted(voteCasted+1)
//         setTotalVotes(totalVotes - 1)
//         setUsers(newUsers)
//     }
// }


// value={{users: users, incrementValue: incrementValue, decrementValue: decrementValue, voteCasted: voteCasted, totalVotes: totalVotes}}
  return (
   <Router>
    <HMContext.Provider>
      <Route exact path='/' component={ HM }/>
      <Route  path='/LB' component= { LB }/> 
    </HMContext.Provider>
   </Router>
  );
}

export default App;
