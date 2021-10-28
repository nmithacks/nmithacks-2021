// eslint-disable-next-line
import React from 'react'

import './PrizeCards.css'


const PrizeCards = (props) => {
    return (
        <div >
            <div className='card'>
                <h1> {props.title} </h1>
                <p> {props.val} </p>
            </div>
        </div>

    )
}

export default PrizeCards
