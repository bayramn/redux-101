import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ToDo from "./components/todo";
function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}
//connect(null, { setAlert, register })(Register);

export default App;
