import React, { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap'; 
import LeadForm from './components/LeadForm';
import DispositionsDropdown from './components/DispositionsDropdown'; // Import dropdown

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f7fc',
        padding: '20px',
      }}
    >
      {/* Full Container */}
      <Container fluid>
        <Row className="justify-content-center">
          {/* Task 1 - Dynamic Popup Modal */}
          <Col xs={12} md={6} lg={4}>
            <Card className="mb-4 shadow-lg" style={{ height: '100%' }}>
              <Card.Body>
                <Card.Title as="h1" className="text-center text-primary">
                  TASK 1
                </Card.Title>
                <Card.Subtitle as="h3" className="text-center text-muted mb-3">
                  Design a dynamic popup modal
                </Card.Subtitle>
                {/* Add New Lead Button */}
                <div className="text-center">
                  <Button 
                    onClick={() => setShowModal(true)} 
                    variant="primary" 
                    size="lg" 
                    style={{ width: '100%', height: '50px' }}  // Ensuring the button has the same height and width as the dropdown
                  >
                    Add New Lead
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Task 2 - Multi-level Dropdown */}
          <Col xs={12} md={6} lg={4}>
            <Card className="mb-4 shadow-lg" style={{ height: '100%' }}>
              <Card.Body>
                <Card.Title as="h1" className="text-center text-primary">
                  TASK 2
                </Card.Title>
                <Card.Subtitle as="h3" className="text-center text-muted mb-3">
                  Design a dynamic Multi level Dropdown
                </Card.Subtitle>
                {/* Dropdown Component */}
                <div className="text-center">
                  <DispositionsDropdown />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Lead Form Modal */}
      <LeadForm show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
