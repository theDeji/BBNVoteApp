import React, { Component, createContext, useState } from 'react'

    let totalVotes = 0
    let voteCasted = 0

    const users = []

    const HouseMateContext = React.createContext({
        totalVotes: totalVotes,
        voteCasted: voteCasted,
        users: users,
        incrementValue: () =>{

        },
        decrementValue: () =>{

        }
    })

export default HouseMateContext;