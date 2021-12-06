import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { edittask } from "../redux/actions";

function Edit({el}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[edittext,setEdittext] = useState(el.task)
  const handleClick = () => {  dispatch( edittask ( el.id  , edittext )) ;handleClose()}

  return (
    <>
      <button onClick={handleShow} className="button-29">
        EDIT
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={edittext} onChange={(e)=>setEdittext(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick= {handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
