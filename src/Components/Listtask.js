import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task"
import { useState } from "react";

const TodoList = () => {
  const task = useSelector((state) => state.todo);
  const [filterDone,setFilterDone] = useState(false)
  const [filterAll,setFilterAll]=useState(false)
  return (
    <div>
      <div className="btn-list">
        <button onClick={() => setFilterAll(false)}>ALL</button>
        <button
          onClick={() => {
            setFilterDone(true);
            setFilterAll(true);
          }}
        >
          DONE
        </button>
        <button
          onClick={() => {
            setFilterDone(false);
            setFilterAll(true);
          }}
        >
          UNDONE
        </button>
      </div>

      {filterDone && filterAll
        ? task
            .filter((el) => el.done)
            .map((el) => <Task el={el} key={el.id}></Task>)
        : !filterDone && filterAll
        ? task
            .filter((el) => !el.done)
            .map((el) => <Task el={el} key={el.id}></Task>)
        : !filterAll
        ? task.map((el) => <Task el={el} key={el.id}></Task>)
        : null}
    </div>
  );
};
export default TodoList;
