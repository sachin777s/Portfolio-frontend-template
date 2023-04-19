import React, { useContext } from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context'

const Work = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="work">
      <div className="awesome">
        <span style={{color:darkMode?"white":""}}>Works for All these</span>
        <span>Brand & Clients</span>
        <span style={{color:darkMode?"white":""}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolorem,iure.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <button className="button s-button">Hire Me</button>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
