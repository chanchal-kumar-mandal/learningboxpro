import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const ViewContent = ({ show, onHide, video }) => {
  if (!video) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      backdrop="static"
      className="modern-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{video.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={video.videoUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
            style={{ borderRadius: "10px", width: "100%", height: "400px" }}
          ></iframe>
        </div>
        <p className="mt-3 text-muted">{video.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide} className="d-flex align-items-center">
          <FaTimes className="me-2" />
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewContent;
