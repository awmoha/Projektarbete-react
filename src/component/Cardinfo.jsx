import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, setActive } from "../redux/cardSlice";
const CardInfo = () => {
  const dispatch = useDispatch();
  const { infoCard } = useSelector((state) => state.cardInfo);
  return (
    <div>
      <div>
        <h4>Activ Card</h4>
        {infoCard.slice(0, 1).map((card, i) => {
          return (
            <div>
              <Card key={i} card={card} />
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <div>
          {infoCard.slice(1, 4).map((card, i) => {
            return (
              <div>
                <div onClick={() => dispatch(setActive(card))}>
                  <Card key={i} card={card} />
                </div>
                <div>
                  {/* <button onClick={() => dispatch(setActive(card))}>
                    Set Activity
                  </button> */}
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
