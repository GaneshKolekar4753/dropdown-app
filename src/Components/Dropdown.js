
import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
        {/* calling map function and iterating on dropdown options  */}
      {props.items.map((item) => (
        <p key={props.items.indexOf(item)} onClick={() => props.handleOnClick(item)}>{item}</p>
      ))}
    </div>
  );
};

export default Dropdown;
