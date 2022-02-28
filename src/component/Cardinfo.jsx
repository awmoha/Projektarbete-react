import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, setActive } from "../redux/cardSlice";
import { TiDelete } from "react-icons/ti";

const CardInfo = () => {
  const dispatch = useDispatch();
  const { infoCard } = useSelector((state) => state.cardInfo);
  return (
    <div>
      <div>
        <h4>Activ Card</h4>
        {infoCard.slice(0, 1).map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} />
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <div>
          {infoCard.slice(1, 4).map((card, i) => {
            return (
              <div key={i}>
                <div onClick={() => dispatch(setActive(card))}>
                  <Card card={card} />
                </div>
                <div className="delete_btn">
                  {/* <button onClick={() => dispatch(setActive(card))}>
                    Set Activity
                  </button> */}
                  {/* <button onClick={() => dispatch(deleteCard(card.id))}>
                    Remove
                  </button> */}
                  <TiDelete onClick={() => dispatch(deleteCard(card.id))} />
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
