import React from "react";
import CircleButton from "./CircleButton.js";

const buttonSize = "75px";

const ButtonBar = (props) => {
  return (
    <div
      className="ButtonBar"
      style={{
        backgroundColor: 'grey',
      }}
    >
      <CircleButton value="R" size={buttonSize} color="red" />
      <CircleButton value="O" size={buttonSize} color="orange" />
      <CircleButton value="Y" size={buttonSize} color="yellow" />
      <CircleButton value="G" size={buttonSize} color="green" />
      <CircleButton value="B" size={buttonSize} color="blue" />
      <CircleButton value="I" size={buttonSize} color="purple" />
      <CircleButton value="V" size={buttonSize} color="violet" />
    </div>
  );
};

export default ButtonBar;
