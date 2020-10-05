import React, { useState, useContext } from 'react'
import HMContextProvider from '../contexts/HMContext';
import HMContext from '../contexts/HMContext'


export default function Leaderboard() {

    const {details} = useContext(HMContext);
    console.log(details)
    let winnerVote = Math.max.apply(Math, details.map(function(o) { return o.votes; }))
    let winner;
    details.map(user => {
        if(winnerVote === 0){
            console.log('No winner')
        }else if(user.votes !== winnerVote){
            console.log('Not the winner')
        }else{
            winner = user.name
        }
    })
     

    return (
        <>
        <div className="winner">
                <h1>{winner} Won the Vote!!</h1>
            </div>
        <div className="container">
           {details.map(item => {
                return (
                    <div className="row" key={item.name}> 
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="HousemateDetails" style={{height:'20rem'}}>
                                <div className="picture">
                                    <img className="img-fluid" src={item.pic} />
                                </div>
                                <div className="content">
                                    <h3 className="name">{item.name}</h3>
                                    <h1>{item.votes}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

