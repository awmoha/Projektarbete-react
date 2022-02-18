import React from "react";
import { Link } from "react-router-dom";
import AddCard from "./AddCard";
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/addCard">
        <button>Add Cards</button>
      </Link>
    </div>
  );
}

export default Home;
