import React, { useState, useEffect } from 'react';

function TransactionTable(){

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/transactions')
        .then(r => r.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, []);
  
    const handleDelete = (id) => {
      fetch(`http://localhost:3000/transactions/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          // Update the table data by filtering out the deleted transaction
          setData(prevData => prevData.filter(transaction => transaction.id !== id));
        })
        .catch(error => console.log(error));
    };
  

    return (
    
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th> {/* Add a new column for the delete button */}
          </tr>
        </thead>
        <tbody>
          {data.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
              <button onClick={() => handleDelete(transaction.id)}>Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
  
    
  
  
    );
  

}

export default TransactionTable;