import { ADD_TASK,DEL_TASK,TASK_DONE,EDIT_TASK} from "./types";


export const addTask = newtask => {
  return { type: ADD_TASK, payload: newtask };
};
export  const delTask = (id) => {
  return { type: DEL_TASK,playload:id };
};
export const taskdone = (id) => {
  return { type: TASK_DONE,playload:id };
}
export const edittask =(id,tasknew) =>  {
  return {type: EDIT_TASK,id:id,tasknew:tasknew} ;
}