import React from "react";

export default props => (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <div>
      {props.person.toString()}
    </div>
    <button onClick={props.givePaycheck}>Give Paycheck</button>
  </div>
);
