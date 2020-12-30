import React from "react";
import Clock from "../components/Clock";
import GPS from "../components/GPS";

const Home: React.FC = () => {
  return (
    <div>
      <Clock />
      <GPS />
    </div>
  );
};

export default Home;
