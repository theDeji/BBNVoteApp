import React, { useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import HMContext from '../contexts/HMContext'



export default function HM() {
    
    const { details, setDetails } = useContext(HMContext);
    const { totalVotes, setTotalVotes} = useContext(HMContext);
    const { voteCasted, setVoteCasted } = useContext(HMContext);

    const decrementValue = (item) =>{
        if(item.votes === 0){
            console.log('cant decrement')
        }else{
            item.votes -= 1;
    
            const newUsers = updateUser(item)
    
            setVoteCasted(voteCasted - 1);
            setTotalVotes(totalVotes + 1)
            setDetails(newUsers)
        }
    }
    
    const updateUser = (item) =>{
     return details.map(user => {
        if(user.name == item.name){
          return item
        }else{
          return user
        }
      })
    }
    
    
    const incrementValue = (item) =>{
        if(totalVotes === 0){
            console.log('no more votes available')
        }else{
            item.votes += 1
            const newUsers = updateUser(item)
            setVoteCasted(voteCasted+1)
            setTotalVotes(totalVotes - 1)
            setDetails(newUsers)
        }
    }

    return (
        <>
            <div className="panel">
                <h2>Available Votes</h2>
                <h2>{totalVotes}</h2>
                <progress max="10" min='0' value={totalVotes}></progress>
            </div>
            <div className="container">
                {details.map(item => {
                    return (
                        <div className="row" key={item.name}> 
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="HousemateDetails">
                                    <div className="picture">
                                        <img className="img-fluid" src={item.pic} />
                                    </div>
                                    <div className="content">
                                        <h3 className="name">{item.name}</h3>
                                        <h4 className="title">{item.title}</h4>
                                        <h1>{item.votes}</h1>
                                    </div>
                                    <div className="voteHere">
                                        <input type="button" className="decrement" onClick={() => decrementValue(item)} value="-" />
                                        <h3 className="value">{" "}</h3>
                                        <input type="button" className="increment" onClick={() => incrementValue(item)} value="+" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> 
                <div className="leaderboard">
                <h2><Link to="/leaderboard" style={{textDecoration:'none', color:'white' }}>View Loeaderboard</Link></h2>
            </div>
        </>
    )
}