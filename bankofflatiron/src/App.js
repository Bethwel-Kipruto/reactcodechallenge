
import React from 'react';
import TransactionForm from './transactionfile';
import TransactionTable from './table';


function App() {

return(
  <div style={{backgroundColor:'grey',
               textAlign: "center"
              
  
  }}>
<h1  style={{
    color:"white"
}}>BANK OF FLATIRON</h1>
<img  src="https://shorturl.at/uJMO5"  style={{
    borderRadius: '15px'
}}/>
<TransactionTable />
<TransactionForm />

</div>


);
}

  





export default App;

