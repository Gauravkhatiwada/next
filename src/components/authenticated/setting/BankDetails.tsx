"use client";
import React, { useState, useEffect } from 'react';

const BankDetails: React.FC = () => {
  // State for bank details
  const [bankDetails, setBankDetails] = useState({
    firstName: '',
    lastName: '',
    accountNumber: '',
    bankName: '',
    creditCardNumber: '',
    registeredPhoneNumber: '',
    expiryDate: ''
  });

  // State for editing values
  const [editValues, setEditValues] = useState({
    firstName: bankDetails.firstName,
     lastName: bankDetails.lastName,
    accountNumber: bankDetails.accountNumber,
    bankName: bankDetails.bankName,
    creditCardNumber: bankDetails.creditCardNumber,
    registeredPhoneNumber: bankDetails.registeredPhoneNumber,
    expiryDate: bankDetails.expiryDate
  });

  // State for edit dialog
  const [openEditDialog, setOpenEditDialog] = useState(false);

  useEffect(() => {
    // Fetch bank details from API
    const fetchBankDetails = async () => {
      try {
        const response = await fetch('/api/bank-details'); // Replace with your API endpoint
        const result = await response.json();
        setBankDetails(result);
        setEditValues(result);
      } catch (error) {
        console.error('Error fetching bank details:', error);
      }
    };

    fetchBankDetails();
  }, []);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpenEditDialog(!openEditDialog);
  };

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/bank-details', { // Replace with your API endpoint
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editValues),
      });
      if (response.ok) {
        console.log('Bank details updated successfully');
        setBankDetails(editValues);
        handleEditToggle(e);
      } else {
        console.error('Failed to update bank details');
      }
    } catch (error) {
      console.error('Error updating bank details:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl mb-4">Bank Details</h2>

      <form noValidate autoComplete="off">
        <div className='flex flex-row'>
        <div className="mb-4">
          <label className="block text-gray-700">
           Account Holder Name:
          </label>
          <p>{bankDetails.firstName}</p>
        </div>
        {/* <div className="mb-4 px-5">
          <label className="block text-gray-700">
          Account Holder Last Name
          </label>
          <p>{bankDetails.lastName}</p>
        </div> */}
       </div>

        <div className="mb-4">
          <label className="block text-gray-700">
            Account Number:
          </label>
          <p>{bankDetails.accountNumber}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Bank Name:
          </label>
          <p>{bankDetails.bankName}</p>
        </div>
       
        {/* <div className="mb-4">
          <label className="block text-gray-700">
            Credit Card Number
          </label>
          <p>{bankDetails.creditCardNumber}</p>
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700">
            Registered Phone Number:
          </label>
          <p>{bankDetails.registeredPhoneNumber}</p>
        </div>
      

        <button
          onClick={handleEditToggle}
          className="px-4 py-2 primary-btn-blue text-white rounded"
        >
          Edit Bank Details
        </button>
      </form>

      {/* Edit Bank Details Dialog */}
      {openEditDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl mb-4">Edit Bank Details</h3>
            <input
              type="text"
              name="firstName"
              value={editValues.firstName}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="First Name"
            />
            {/* <input
              type="text"
              name="lastName"
              value={editValues.lastName}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Last Name"
            /> */}
            <input
              type="text"
              name="accountNumber"
              value={editValues.accountNumber}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Account Number"
            />
            <input
              type="text"
              name="bankName"
              value={editValues.bankName}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Bank Name"
            />
            <input
              type="text"
              name="creditCardNumber"
              value={editValues.creditCardNumber}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Credit Card Number"
            />
            <input
              type="text"
              name="registeredPhoneNumber"
              value={editValues.registeredPhoneNumber}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Registered Phone Number"
            />
          
            <div className="flex justify-end">
              <button
                onClick={handleEditToggle}
                className="px-4 py-2 bg-gray-300 text-black rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankDetails;
