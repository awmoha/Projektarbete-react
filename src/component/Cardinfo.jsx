import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import NotActiveCard from "./NotActiveCard";
const CardInfo = () => {
  const { infoCard } = useSelector((state) => state.cardInfo);
  //försöka att loopa igenom array och kolla om det funkar med activ
  const { notActiveCards } = useSelector((state) => state.cardInfo);
  const [isActive, setisActive] = useState();
  let handleActiv = () => {
    for (let i = 0; i < infoCard.length; i++)
      for (let n = 0; n < notActiveCards.length; n++) console.log(infoCard);
    console.log(notActiveCards);
    // console.log(infoCard[1].isActive)
  };

  return (
    <div>
      <div>
        {infoCard.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>

      <div onClick={handleActiv}>
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
