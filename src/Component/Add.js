import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Add({ addmovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterUrl, setposterUrl] = useState("");
  const [rate, setrate] = useState("");

  const handleAdd = () => {
    addmovie({ title, description, posterUrl, rate });
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="title">title</label>
          <input
            type="texte"
            placeholder="placeholder enter title here"
            onChange={(e) => settitle(e.target.value)}
          />
          <label htmlFor="description">description</label>
          <input
            type="title"
            placeholder="placeholder enter description here"
            onChange={(e) => setdescription(e.target.value)}
          />
          <label htmlFor="posterUrl">posterUrl</label>
          <input
            type="title"
            placeholder="placeholder enter url here"
            onChange={(e) => setposterUrl(e.target.value)}
          />
          <label htmlFor="rate">rate</label>
          <input
            type="title"
            placeholder="placeholder enter rate here"
            onChange={(e) => setrate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
