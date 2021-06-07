export const addToDo = ({ description, id }) => {
  return {
    type: "ADD",
    payload: { description, id },
  };
};

export const removeToDo = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
