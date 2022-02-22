import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import NotActiveCard from "./NotActiveCard";
const CardInfo = () => {
  const { infoCard } = useSelector((state) => state.cardInfo);
  const { notActiveCards } = useSelector((state) => state.cardInfo);
  // let handleActiv = () => {
  //   for (let i = 0; i < infoCard.length; i++)
  //     for (let n = 0; n < notActiveCards.length; n++) console.log(infoCard);
  //   console.log(notActiveCards);
    // console.log(infoCard[1].isActive)
 // };
  let handleActivTest = () => {
    let newArray = infoCard.concat(notActiveCards); //concat samlas två array i en array
    for (let i = 0; i < infoCard.length; i++)
      for (let n = 0; n < notActiveCards.length; n++) 
      if(newArray[1].isActive === true){
        newArray.push(newArray[0])
      
    }
    console.log(newArray);
    // console.log(infoCard[1].isActive)
  };
  return (
    <div>
      <div>
        {infoCard.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>

      <div onClick={handleActivTest}>
        <p> InActive Cards</p>
        {notActiveCards.map((creditList, i) => (
          <NotActiveCard key={i} creditList={creditList} />
        ))}
      </div>
    </div>
  );
};
export default CardInfo;

// e.stopPropagation();    ett sätt kolla på det
