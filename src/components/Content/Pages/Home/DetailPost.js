import { Button, Modal } from "react-bootstrap";

import React from "react";

const DetailPost = ({ show, handleClose, data }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.content}</Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            fontSize: 11,
            justifyContent: "space-between",
          }}
        >
          <div className="text-muted">Last Updated {data.updated_at}</div>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#ff6400", borderColor: "#ff6400" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailPost;
