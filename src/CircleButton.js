import React from "react";

const CircleButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        width: props.size,
        height: props.size
      }}
      className="MyButton"
      onClick={() => console.log("click")}
    >
      {props.value}
    </button>
  );
};

export default CircleButton;
