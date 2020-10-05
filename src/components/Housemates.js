import React, { useState, useContext} from 'react'
import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import HousemateContext from '../contexts/HousemateContext'
import Style from './Style.css'



export default function Housemates() {
    const { totalVotes, decrementValue, incrementValue, users } = useContext(HousemateContext);

    return (
        <>
            <div className="panel">
                <h2>Available Votes</h2>
                <h2>{totalVotes}</h2>
                <progress max="10" min='0' value={totalVotes}></progress>
            </div>
            <div className="container">
                {users.map(item => {
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