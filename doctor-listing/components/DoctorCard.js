import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div
      style={{
        backgroundColor: '#00bcd4',
        color: '#ffffff',          
        padding: '20px',
        marginBottom: '15px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.95)',
      }}
    >
      <h2 style={{ margin: '0 0 10px 0' }}>{doctor.name}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Experience:</strong> {doctor.experience} years</p>
      <p><strong>Contact:</strong> {doctor.phone}</p>
    </div>
  );
};

export default DoctorCard;
