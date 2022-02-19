import React from "react";
import { Link } from "react-router-dom";
import CardInfo from "../component/Cardinfo";
import AddCard from "./AddCard";
function Home() {
  return (
    <div className="home__div">
      <h2>Home</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <CardInfo />
    </div>
  );
}

export default Home;
