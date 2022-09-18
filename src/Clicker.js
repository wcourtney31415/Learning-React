import React from "react";
var x = 10;
const Clicker = (props) => {
  return (
    <button
      style={{
        backgroundColor: "rgb(255,0,255)",
        width: 250,
        height: 250,
      }}
      className="BigButton"
      onClick={props.callMeBack()}
    ></button>
  );
};

export default Clicker;
