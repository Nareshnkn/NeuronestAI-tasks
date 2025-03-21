// src/components/ModalComponent.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ show, onHide, title, body, footerButtons }) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered
      size="lg" // ✅ Responsive width
      aria-labelledby="contained-modal-title-vcenter"
    >
      {/* ✅ Modal Header */}
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      {/* ✅ Modal Body - Adjusts dynamically */}
      <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        {body}
      </Modal.Body>

      {/* ✅ Modal Footer - Buttons dynamically rendered */}
      <Modal.Footer>
        {footerButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant || 'secondary'} // Default variant is 'secondary'
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        ))}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
