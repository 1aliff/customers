import React, { useEffect, useState } from 'react'
import { Navbar, TableData } from './components/'
import { getAllCustomer } from './api/index.js'
import './App.css';

function App() {
  const [customers, setCustomers] = useState([])
  const [flag, setFlag] = useState([])

  console.log('state', customers)

  useEffect(() => {
    fetchData();
    console.log(`mounted`)
  },[])

  const fetchData = async () => {
    const result = await getAllCustomer();
    setCustomers(result)
  }

  // const handleAdd
  
  return (
    <div className="App">
      <Navbar 
        // flag={flag}
      />
      <TableData 
        customers={customers}
      />
    </div>
  );
}

export default App;
