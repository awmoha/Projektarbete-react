import React from "react";
import { Link } from "react-router-dom";
import CardInfo from "../component/Cardinfo";
function Home() {
  return (
    <div>
      <Link to="/">
        <button>Go back to start</button>
      </Link>
      <CardInfo />
    </div>
  );
}

export default Home;
