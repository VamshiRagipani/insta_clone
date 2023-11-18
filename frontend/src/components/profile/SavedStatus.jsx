import React from 'react';

const SavedStatus = ({ savedStatus }) => {
  return (
    <div style={{ display: 'flex', gap: '40px', marginLeft: '10vh', marginTop: '4vh' }}>
      {savedStatus.map((status, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={status.status[0]}
            alt=""
            style={{ width: '10vh', height: '10vh', borderRadius: '50%', marginBottom: '1vh' }}
          />
          <span style={{ color: 'white' }}>{status.statusName}</span>
        </div>
      ))}
    </div>
  );
};

export default SavedStatus;
