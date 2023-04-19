import React from "react";
import "./Floating.css"

function FloatingDiv({image, text1, text2}) {
  return (
    <div className="floating-div">
      <img src={image} alt="" />
      <span>
       {text1} <br />
       {text2}
      </span>
    </div>
  );
}

export default FloatingDiv;
