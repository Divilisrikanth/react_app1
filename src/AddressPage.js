import React from 'react';
import './index.css'; // Import the CSS file for styling

const AddressPage = () => {
  return (
    <div className="address-page">
      <h1>Address Page</h1>
      <div className="address-container">
        <div className="address-item">
          <h3>ramakanth</h3>
          <p>123-10</p>
          <p>viskhapatanam</p>
          <p>vizag</p>
          <p>Andhrapradesh</p>
          <p>530007</p>
        </div>
        <div className="address-item">
          <h3>srikanth</h3>
          <p>123-10</p>
          <p>viskhapatanam</p>
          <p>vizag</p>
          <p>Andhrapradesh</p>
          <p>530007</p>
        </div>
        {/* Add more address items as needed */}
      </div>
    </div>
  );
};

export default AddressPage;
