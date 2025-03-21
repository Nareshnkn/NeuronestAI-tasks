import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import ToastMessage from './ToastMessage';

const LeadForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comments: '',
    source: []
  });

  const [showToast, setShowToast] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // ✅ Track missing fields

  // ✅ Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormErrors({ ...formErrors, [name]: false }); // ✅ Remove error on change

    if (name === 'comments') {
      if (value.length <= 500) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        source: checked
          ? [...prev.source, value]
          : prev.source.filter((item) => item !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ✅ Check for empty required fields
    let errors = {};
    if (!formData.name) errors.name = true;
    if (!formData.mobile) errors.mobile = true;
    if (!formData.email) errors.email = true;
    if (!formData.comments) errors.comments = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // ❌ Don't proceed if there are errors
    }

    // ✅ Show success toast message
    setShowToast(true);
    handleClose();
    
    // ✅ Reset form
    setFormData({ name: '', mobile: '', email: '', comments: '', source: [] });
    setTimeout(() => setShowToast(false), 3000);
  };

  // ✅ Form Content for Modal Body
  const modalBody = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label className={formErrors.name ? 'text-danger fw-bold' : ''}>
          Name <span style={{ color: 'red' }}>*</span>
        </Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={formErrors.name ? 'is-invalid' : ''}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={formErrors.mobile ? 'text-danger fw-bold' : ''}>
          Mobile <span style={{ color: 'red' }}>*</span>
        </Form.Label>
        <Form.Control
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className={formErrors.mobile ? 'is-invalid' : ''}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={formErrors.email ? 'text-danger fw-bold' : ''}>
          Email <span style={{ color: 'red' }}>*</span>
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'is-invalid' : ''}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Come to know from</Form.Label>
        <div>
          {['Facebook', 'LinkedIn', 'Instagram', 'Other'].map((source) => (
            <label key={source} className="d-flex align-items-center">
              <Form.Check
                type="checkbox"
                value={source}
                checked={formData.source.includes(source)}
                onChange={handleChange}
                className="me-2"
              />
              {source}
            </label>
          ))}
        </div>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className={formErrors.comments ? 'text-danger fw-bold' : ''}>
          Comments <span style={{ color: 'red' }}>*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          maxLength="500"
          className={formErrors.comments ? 'is-invalid' : ''}
        />
        <small className="text-muted">{formData.comments.length} / 500 characters allowed</small>
      </Form.Group>
    </Form>
  );

  // ✅ Modal Footer Buttons
  const footerButtons = [
    { text: 'Close', variant: 'secondary', onClick: handleClose },
    { text: 'Submit', variant: 'primary', onClick: handleSubmit }
  ];

  return (
    <>
      {/* ✅ Success Toast Message */}
      <ToastMessage showToast={showToast} onClose={() => setShowToast(false)} />

      {/* ✅ Lead Form Modal */}
      <ModalComponent show={show} onHide={handleClose} title="Add New Lead" body={modalBody} footerButtons={footerButtons} />
    </>
  );
};

export default LeadForm;
