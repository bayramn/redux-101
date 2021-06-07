import React, { useState } from "react";
import { Provider, connect, useSelector, useDispatch } from "react-redux";
import { addToDo } from "../actions";
function ToDo() {
  const [toDoDescription, setToDoDescription] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  let key = 0;
  const handleAddToDo = () => {
    dispatch(addToDo({ description: toDoDescription, id: key }));
    setToDoDescription("");
    key++;
  };

  const handleRemoveToDo = () => {};
  return (
    <div>
      <input
        type="search"
        placeholder="Write To Do"
        onChange={(e) => setToDoDescription(e.target.value)}
        value={toDoDescription}
      ></input>
      <button onClick={handleAddToDo}>+</button>

      {todos.map((todo) => (
        <div key={todo.key} className="toDo">
          <p>{todo.description}</p>
          <div onClick={handleRemoveToDo}>x</div>
        </div>
      ))}
    </div>
  );
}
//connect(null, { setAlert, register })(Register);

export default ToDo;
