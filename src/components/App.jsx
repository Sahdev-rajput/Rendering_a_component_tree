import React, { useState } from "react";
import Todoitem from "./ToDoItem.jsx";
function App() {
  const [myarr, setarr] = useState([]);
  const [text, settext] = useState("");
  function gettext(event) {
    settext(event.target.value);
  }
  function changeit() {
    setarr((arr) => [...arr, text]);
    settext("");
  }
  function deleteitem(id) {
    // console.log(id);
    setarr((prevItems) => {
      return prevItems.filter((item, index) => {
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
        <input type="text" onChange={gettext} />
        <button onClick={changeit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {myarr.map((e, index) => (
            <Todoitem key={index} id={index} text={e} onchecked={deleteitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
