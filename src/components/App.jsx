import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Todolist from "./todo";

function App() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);
  // const [rItem, setrItem] = useState([]);
  function changed(event) {
    const newValue = event.target.value;
    setText(newValue);
  }
  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, text];
    });
    setText("");
  }
  function deleteItem(id) {
    setItem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changed} type="text" value={text} />
        <button onClick={addItem}>
          <span>Add-</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((TodoItem, index) => (
            <Todolist
              key={index}
              id={index}
              text1={TodoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
