import { ADD_TASK, DEL_TASK, EDIT_TASK, TASK_DONE } from "./types";


const initialState = {
  todo: [
    {
      id: 0,
      task: "Water The Plants",
      done: false,
    },
    {
      id: 1,
      task: "Clean The House",
      done: false,
    },
    {
      id: 2,
      task: "Cook Dinner",
      done: false,
    },
  ],
};
const ToDOReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todo: [...state.todo, action.payload] };
    case DEL_TASK:
      return {...state, todo:  state.todo.filter(el=> el.id !== action.playload)}
    case TASK_DONE:
      return{...state, todo: state.todo.map(el => el.id === action.playload ? {...el, done : !el.done } :el)}
    case EDIT_TASK:
      return{...state, todo: state.todo.map(el => el.id === action.id ? {...el, task : action.tasknew } :el)}
  
    default:
      return state;
  }
};
export default ToDOReducer;

