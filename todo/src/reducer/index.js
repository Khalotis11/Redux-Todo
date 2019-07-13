import { ADD_TODO } from "../actions";

const initialState = {
  todo: [
    { task: "Walk the dog", completed: false },
    { task: "Feed Cats", completed: true }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTask = {
        task: action.payload,
        completed: false
      };
      return {
        ...state,
        todo: [...state.todo, newTask]
      };
    default:
      return state;
  }
};
