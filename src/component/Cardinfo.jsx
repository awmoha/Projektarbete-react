import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, setActive } from "../redux/cardSlice";
const CardInfo = () => {
  const dispatch = useDispatch();
  const { infoCard } = useSelector((state) => state.cardInfo);
  return (
    <div>
      <div>
        {infoCard.slice(0, 1).map((card, i) => {
          return (
            <div>
              <Card key={i} card={card} />
            </div>
          );
        })}
      </div>

      <div>
        <div>
          {infoCard.slice(1, 4).map((card, i) => {
            return (
               //<div
               //  onClick={() => dispatch(setActive(card))}
               //  onDoubleClick={() => dispatch(deleteCard(card.id))}
              // >
              <div>
                <Card key={i} card={card} />
                <div>
                  <button onClick={() => dispatch(setActive(card))}>
                    Set Activity
                  </button>
                  <button onClick={() => dispatch(deleteCard(card.id))}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CardInfo;
