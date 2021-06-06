import { Provider, connect, useSelector } from "react-redux";

function ToDo() {
  const todos = useSelector((state) => state.todo);
  return (
    <div>
      <input type="search" placeholder="Write To Do"></input>
      <button>+</button>

      <p>To Do 1</p>
    </div>
  );
}
//connect(null, { setAlert, register })(Register);

export default ToDo;
