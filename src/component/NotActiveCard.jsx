import React from 'react'

function NotActiveCard({ credit }) {
  return (
    credit.isUsed === false ? <div></div> : 
    <div className="card">
    <div className="card_orginal">
      <div className="credit-card__logo">{credit.bankName}</div>
      <div className="credit-card__number">{credit.cardNumber}</div>
      <span className="credit-ccv">{credit.ccv}</span>
      <div className="credit-card__name">CARDHOLDER'S NAME</div>
      <div className="credit-card__name" value={credit.cardName}>
        {credit.cardName}
      </div>
      <div className="credit-card__info_label">
        VALID UP TO {credit.cardMonth} / {credit.cardYear}
      </div>
    </div>
  </div>
  )
}

export default NotActiveCard;