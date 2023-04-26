import React, { useState, useEffect } from 'react';

function TransactionForm() {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  useEffect(() => {
    // Update the form data whenever it changes
    console.log('Form data has been updated:', formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(() => {
        // Clear the form data
        setFormData({
          date: '',
          description: '',
          category: '',
          amount: ''
        });
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
      />
      <br />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;