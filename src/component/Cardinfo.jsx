import Card from "./Card";
import { useSelector } from "react-redux";
import NotActiveCard from "./NotActiveCard";

const CardInfo = () => {
  const { infoCard } = useSelector((state) => state.cardInfo);
  const { cardList } = useSelector((state) => state.cardInfo);
  // const { notActiveCards } = useSelector((state) => state.cardInfo);
  // const [activeCardIndex, setActiveCardIndex] = useState(0);
  // const [show, setShow] = useState(false);

  return (
    <div>
      <div>
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
