import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import NotActiveCard from "./NotActiveCard";

const CardInfo = () => {
  const { infoCard } = useSelector((state) => state.cardInfo);
  const { notActiveCard } = useSelector((state) => state.cardInfo);
  return (
    <div>
      {infoCard.map((credit, i) => (
        <Card key={i} credit={credit} />
      ))}
    </div>
  );
};

export default CardInfo;
