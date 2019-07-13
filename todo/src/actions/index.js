export const ADD_TODO = "ADD_TODO";

export const addTodos = newtodo => {
  return {
    type: ADD_TODO,
    payload: newtodo
  };
};
