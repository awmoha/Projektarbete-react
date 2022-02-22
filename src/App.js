import style from "./style.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import { fetchRandomUser } from "./redux/cardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomUser());
  }, [dispatch]);
  //jag skrev dispatch här i app.js för att när man add a new card
  // så ändras inte namnet på alla nya kort ??????
  const { infoCard } = useSelector((state) => state.cardInfo);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="btn---app">
            <Link to="/home">
              <button className="btn_app">Home</button>
            </Link>
            <Link to="/addCard">
              <button className="btn_app">Add Card</button>
            </Link>
          </div>
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Route path="/addCard" component={AddCard} />  */}
            {infoCard.map((card, i) => (
              <Route
                path="/addcard"
                key={i}
                render={() => <AddCard card={card} />}
              />
            ))}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
