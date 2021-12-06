import React, { useState } from 'react'
import { Button,InputGroup,FormControl } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'

const Add = () => {
const [text,setText] = useState('')
const dispatch = useDispatch()
return (
  <div>
    <>
      <InputGroup className="mb-3">
        <div className="inputbtn">
          <FormControl
            className="smaller-input"
            placeholder="Add Your New Task Here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            onClick={() => {
              dispatch(addTask({ id: Math.random(), task: text, done: false }));
              setText("");
            }}
          >
            Add New Task
          </Button>
        </div>
      </InputGroup>
    </>
  </div>
);
}
export default Add