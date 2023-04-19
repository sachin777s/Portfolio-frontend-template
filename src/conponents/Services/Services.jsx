import React, { useContext } from "react";
import "./Services.css";
import HeartEmogi from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from '../../Context'


const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" name="Services">
      {/* Left side */}
      <div className="awesome">
        <span style={{color:darkMode?"white":""}}>My Awesome</span>
        <span>Services</span>
        <span style={{color:darkMode?"white":""}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          iure.
        </span>
        <a href="/" download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>

      {/* Right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmogi}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={" HMTL, CSS,Javascript"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UX/UI"}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
