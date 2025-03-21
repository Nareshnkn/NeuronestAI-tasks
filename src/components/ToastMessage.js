import React from 'react';
import { Toast } from 'react-bootstrap';

const ToastMessage = ({ showToast, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1050, // Ensure it's above other content
      }}
    >
      <Toast show={showToast} bg="success" onClose={onClose}>
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body className="text-white text-center">
          ✅ New lead added successfully!
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastMessage;
