import React from "react";

function Child(props) {
  return <div className="child" style={{ backgroundColor: props.color }} onClick={props.onChangeColor} />;
}

export default Child;
