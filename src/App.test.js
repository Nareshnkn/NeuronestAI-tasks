import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import LeadForm from './components/LeadForm';
import DispositionsDropdown from './components/DispositionsDropdown'; // Import the new dropdown component

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px', // Space between button & dropdown
        padding: '20px', // Add some padding from edges
      }}
    >
      {/* ✅ Add New Lead Button */}
      <Button onClick={() => setShowModal(true)} variant="primary">
        Add New Lead
      </Button>

      {/* ✅ Dispositions Dropdown */}
      <DispositionsDropdown />

      {/* ✅ Lead Form Modal */}
      <LeadForm show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
