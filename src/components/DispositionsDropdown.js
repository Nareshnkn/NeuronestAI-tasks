import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DispositionsDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');  // State to store selected option
  const [showProjects, setShowProjects] = useState(false);
  const [showExecutives, setShowExecutives] = useState(false);
  const [topLevelOption, setTopLevelOption] = useState('');  // State to store top-level selection

  const handleTopLevelSelect = (option) => {
    setTopLevelOption(option);  // Set the top-level option (like "Interested")
    setSelectedOption(option);  // Initially, the selected option will be the top-level one
  };

  const handleSubOptionSelect = (subOption) => {
    setSelectedOption(topLevelOption);  // Set the selected option to the top-level option
  };

  return (
    <div>
      {/* ✅ Dropdown Button */}
      <DropdownButton id="dropdown-disposition" title="Disposition" variant="primary">
        {/* Main Dropdown Items */}
        <Dropdown.Item
          onMouseEnter={() => setShowProjects(true)}
          onMouseLeave={() => setShowProjects(false)}
          onClick={() => handleTopLevelSelect('Interested')}  // Set top-level option to 'Interested'

          style={{ position: 'relative' }}
        >
          Interested ▶
          {showProjects && (
            <div
              style={{
                position: 'absolute',
                left: '100%',
                top: 0,
                background: 'white',
                border: '1px solid #ccc',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                minWidth: '150px',
              }}
            >
              <Dropdown.Item onClick={() => setSelectedOption('Project 1')}>Project 1</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedOption('Project 2')}>Project 2</Dropdown.Item>
              <Dropdown.Item
                onMouseEnter={() => setShowExecutives(true)}
                onMouseLeave={() => setShowExecutives(false)}
                style={{ position: 'relative' }}
              >
                Executive ▶
                {showExecutives && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '100%',
                      top: 0,
                      background: 'white',
                      border: '1px solid #ccc',
                      boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                      minWidth: '150px',
                    }}
                  >
                    <Dropdown.Item onClick={() => setSelectedOption('Executive 1')}>Executive 1</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedOption('Executive 2')}>Executive 2</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedOption('Executive 3')}>Executive 3</Dropdown.Item>
                  </div>
                )}
              </Dropdown.Item>
            </div>
          )}
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setSelectedOption('Not interested')}>Not interested</Dropdown.Item>
        <Dropdown.Item onClick={() => setSelectedOption('Call back')}>Call back</Dropdown.Item>
        <Dropdown.Item onClick={() => setSelectedOption('Follow up')}>Follow up</Dropdown.Item>
        <Dropdown.Item onClick={() => setSelectedOption('Call not response')}>Call not response</Dropdown.Item>
      </DropdownButton>

      {/* ✅ Display Selected Option Below the Dropdown */}
      {selectedOption && (
        <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#007bff' }}>
          Selected Option: {selectedOption}
        </div>
      )}
    </div>
  );
};

export default DispositionsDropdown;
