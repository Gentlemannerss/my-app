import React from "react";
import Benefits from "../../components/Benefits/Benefits.js";
import "./Home.css";
import Services from "../../components/Services/Services.js";

function Home() {
  return (
    <div>
        <p className="companyName">Mountain Innovations</p>
        <Services />
        <Benefits />
        <p className="slogan">Ga mee met MountainInnovations op jouw reis naar een geoptimaliseerde en efficiënte bedrijfsvoering in het digitale tijdperk.</p>
    </div>
  );
}

export default Home;