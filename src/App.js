import style from "./style.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import { fetchRandomUser } from "./redux/cardSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomUser());
  }, [dispatch]);
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
            <Route path="/addcard" component={AddCard} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
