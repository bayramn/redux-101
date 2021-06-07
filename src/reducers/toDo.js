const initialState = [
  //   {
  //     description: "",
  //     id: 0,
  //   },
];

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { description: action.payload.description, id: action.payload.id },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default toDoReducer;
