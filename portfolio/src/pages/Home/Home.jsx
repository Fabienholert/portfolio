import React from "react";
import Card from "../../components/Card/Card";
import Section from "../../components/section/section";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="home__Container">
        <h2 className="home__nom">Fabien Holert</h2>
      </div>
      <Section />
      <Card />
    </div>
  );
}
