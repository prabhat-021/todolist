import React from "react";

function todolist(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text1}</li>;
    </div>
  );
}
export default todolist;
