import React from 'react'

function Card({card}) {
  return (
    <div>
        <h2>Info Card</h2>
        <div className='card_div'>
            <p>{card.name}</p>
            <p>{card.endor}</p>
            <p>{card.cardNumber}</p>
            <p>{card.cardMonth}</p>
            <p>{card.cardYear}</p>
            <p>{card.bankName}</p>

        </div>
    </div>
  )
}

export default Card