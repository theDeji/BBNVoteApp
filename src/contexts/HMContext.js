import React, { Component, createContext, useState } from 'react'
import HousemateContext from './HousemateContext'
import Housemates from '../components/Housemates'
import Dorathy from '../img/Dorathy.jpg'
import Laycon from '../img/Laycon.jpg'
import Kidd from '../img/Kidd.png'
import Nengi from '../img/Nengi.jpg'
import Ozo from '../img/Ozo.jpg'
import Vee from '../img/Vee.jpg'

// export const HousemateContext = createContext()
export const HMContext = createContext()

const HMContextProvider = (props) => {
    const [totalVotes, setTotalVotes] = useState(10)
    const [voteCasted, setVoteCasted] = useState(0)

    const [details, setDetails] = useState([
        {
            name: "Laycon",
            pic: Laycon,
            title: '85m Drumstick',
            votes: 0
        },
        {
            name: "Dorathy",
            pic: Dorathy,
            title: 'Ahem',
            votes: 0
        },
        {
            name: "Kiddwaya",
            pic: Kidd,
            title: 'Big Brother',
            votes: 0
        },
        {
            name: "Nengi",
            pic: Nengi,
            title: 'Si',
            votes: 0
        },
        {
            name: "Vee",
            pic: Vee,
            title: 'Baby Girl',
            votes: 0
        },
        {
            name: "Ozo",
            pic: Ozo,
            title: 'Ozuo, Smh!',
            votes: 0
        }
    ])

    return(
        <HMContext.Provider value={{details, setDetails, totalVotes, setTotalVotes, voteCasted, setVoteCasted}}>
            {props.children}
        </HMContext.Provider>
    )
}
export default HMContextProvider