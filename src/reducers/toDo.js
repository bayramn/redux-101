const initialState = [];

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

export default toDoReducer;
