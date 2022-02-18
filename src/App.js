import style from "./style.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route  path="/addCard" render={() => <AddCard />}></Route>

        </Switch>
      </header>
    </div>
  );
}

export default App;
