import { useDispatch } from "react-redux";
import { delTask, taskdone } from "../redux/actions";
import Edit from "./Edit";
import {Card} from "react-bootstrap";

const Task = ({el}) => {
  const dispatch = useDispatch()
    return (
      <div className="cardSection">
        <ul>
          <li>
            <Card
              style={{
                width: "55rem",
                height: "10rem",
                background: "rgb(204, 200, 200)",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
              }}
            >
              <Card.Body>
                <Card.Title>TASK</Card.Title>
                <h2>{el.task}</h2>
                <div className="btn29-func">
                  <button
                    onClick={() => dispatch(delTask(el.id))}
                    className="button-29"
                  >
                    DELETE
                  </button>
                  <button
                    style={{
                      textDecoration: el.done && "line-through",
                      color: "black",
                    }}
                    onClick={() => dispatch(taskdone(el.id))}
                    className="button-29"
                  >
                    {el.done ? "UNDONE" : "DONE"}
                  </button>
                  <Edit el={el}></Edit>
                </div>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </div>
    );
}

export default Task

