import Card from "./Card";
import { useSelector } from "react-redux";
import NotActiveCard from "./NotActiveCard";

const CardInfo = () => {
  const { infoCard } = useSelector((state) => state.cardInfo);
  const { notActiveCards } = useSelector((state) => state.cardInfo);
  return (
    <div>
    <div>
    <p className='activeCard'>Active card</p>

      {infoCard.map((credit, i) => (
        <Card key={i} credit={credit} />
        
      ))}
    </div>
    {/* <div>
        <p className='activeCard'>Inactive cards</p>
        {notActiveCards.map((notActiveCard, i) => (
      
          <NotActiveCard key={i} credit={notActiveCard}/>
        ))}
        </div> */}
    </div>
  );
};

export default CardInfo;
