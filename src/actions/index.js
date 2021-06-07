export const addToDo = ({ description, id }) => {
  return {
    type: "ADD",
    payload: { description, id },
  };
};
