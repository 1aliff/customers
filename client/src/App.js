import React, { useEffect, useState } from 'react'
import { Navbar, TableData } from './components/'
import { getAllCustomer } from './api/index.js'
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]) // initalFetch
  console.log('state', customers)

  useEffect(() => {
    fetchData();
    console.log(`mounted`,)
  },[]) // temp -> will fix this

  const fetchData = async () => {
    const result = await getAllCustomer();
    setCustomers(result)
  }

  return (
    <div className="App">
      <Navbar 
      />
      <TableData 
        customers={customers}
      />
    </div>
  );
}

export default App;
