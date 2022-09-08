import React from "react";
import CircleButton from "./CircleButton.js";

const buttonSize = "75px";

const buttonContentList = [
  ["R", "red"],
  ["O", "orange"],
  ["Y", "yellow"],
  ["G", "green"],
  ["B", "blue"],
  ["I", "purple"],
  ["V", "violet"],
];

function listToButtons(list) {
  return list.map((x) => {
    var label = x[0];
    var color = x[1];
    return <CircleButton value={label} size={buttonSize} color={color} />;
  });
}

const ButtonBar = (props) => {
  return (
    <div
      className="ButtonBar"
      style={{
        backgroundColor: "rgb(30, 30, 30)",
        padding: "15px",
        borderRadius: "20px",
        boxShadow: "5px 5px 10px rgb(0, 0, 0)",
      }}
    >
      {listToButtons(buttonContentList)}
    </div>
  );
};

export default ButtonBar;
