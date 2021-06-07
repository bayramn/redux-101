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
        <p key={todo.key}>{todo.description}</p>
      ))}
    </div>
  );
}
//connect(null, { setAlert, register })(Register);

export default ToDo;
