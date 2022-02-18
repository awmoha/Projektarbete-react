import style from "./style.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/addCard">
            <button>Add Card</button>
          </Link>

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
