import React, { useState } from 'react';

const Task1 = () => {
  const options = [
    'Onboarding Call',
    'Google Search',
    'Google Analytics',
    'Website Access',
    'Technical Audit',
    'Anchor Text and Semantic Analysis',
    'Competitor Analysis',
    'Ancbhor Text / URL Mapping',
    'Google Data Studio Report',
    'Site level optimization',
    'On Page Optimization' ,
    'Content Creation',
    'Content Publishing',
    'Premium Press Release',
    'Authority Niche Placements',
    'Review Management',
    'Index Links',
    'Video Recap'
  ];

  const [data, setData] = useState(
    options.map((option, index) => ({
      id: index + 1,
      name: option,
      values: Array(4).fill(''), 
    }))
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    setErrorMessage('Error: Not able to post any data.'); 
    console.error('Error: Not able to post any data.'); 
  };

  const handleInputChange = (id, colIndex, value) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id
          ? {
              ...row,
              values: row.values.map((val, idx) =>
                idx === colIndex ? value : val
              ),
            }
          : row
      )
    );
  };

  return (
    <div className='maincon'>
      <h1>Editable Table</h1>
      <table border="1" cellPadding="6" cellSpacing="5" className='tables'>
        <thead>
          <th style={{ border:'none' }}>
            Month 1
          </th>
         
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              {row.values.map((value, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleInputChange(row.id, colIndex, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave}>Save Data</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Task1;
