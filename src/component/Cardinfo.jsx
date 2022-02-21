import Card from "./Card";
import { useSelector } from "react-redux";
import NotActiveCard from "./NotActiveCard";
import { useState } from "react";

const CardInfo = () => {
  const { infoCard } = useSelector((state) => state.cardInfo);
  const [pushCard, setPushCard] = useState(infoCard);
  let changeActiv = () => {
    infoCard.unshift(pushCard)
     setPushCard(pushCard)
  };
  console.log(changeActiv);
  return (
    <div>
      <div onClick={changeActiv}>
        <p> Activity Cards</p>
        {infoCard.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
      {/* <div>
        <p> Cards</p>
        {cardList.map((creditList, i) => (
          <NotActiveCard key={i} creditList={creditList} />
        ))}
      </div> */}
    </div>
  );
};

export default CardInfo;
