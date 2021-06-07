import React, { useState } from "react";
import { Provider, connect, useSelector, useDispatch } from "react-redux";
import { addToDo } from "../actions";
import { removeToDo } from "../actions";
function ToDo() {
  const [toDoDescription, setToDoDescription] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [toDoID, setToDoID] = useState(0);
  const handleAddToDo = () => {
    setToDoID(toDoID + 1);

    dispatch(addToDo({ description: toDoDescription, id: toDoID }));
    setToDoDescription("");
  };

  const handleRemoveToDo = (id) => {
    dispatch(removeToDo(id));
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
        <div key={todo.id} className="toDo">
          <p>{todo.description}</p>
          <div onClick={() => handleRemoveToDo(todo.id)}>x</div>
        </div>
      ))}
    </div>
  );
}
//connect(null, { setAlert, register })(Register);

export default ToDo;
