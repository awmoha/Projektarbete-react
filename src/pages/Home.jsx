import React from "react";
import { Link } from "react-router-dom";
import CardInfo from "../component/Cardinfo";
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <CardInfo/>
      <Link to="/addCard">
        <button>Add Cards</button>
      </Link>
    </div>
  );
}

export default Home;
