import React, { useState } from "react";

function Todoitem(props) {
  return (
    <div
      onClick={() => {
        props.onchecked(props.id);
      }}
    >
      <li /*style={{textDecoration: isDone ? "line-through": "none"}} onClick={makealine}*/
      >
        {props.text}
      </li>
    </div>
  );
}
export default Todoitem;
