import Card from "./Card";
import { useSelector } from "react-redux";
import { useState } from "react";

const CardInfo = () => {
  const { infoCard } = useSelector((state) => state.cardInfo);
  const [isActive, setisActive] = useState();
  let handleActiv = () => {
    for (let i = 0; i < infoCard.length; i++)
      if (infoCard[1] === infoCard[0]) {
        infoCard.usshift([0]);
      }

    console.log(infoCard[1]);
    // console.log(activeCardIndex);
    // console.log(infoCard[1].isActive)
  };

  return (
    <div>
      <div onClick={handleActiv}>
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

// e.stopPropagation();    ett sätt kolla på det
