import React, { useEffect, useState } from 'react'
import { Navbar, TableData } from './components/'
import { getAllCustomer } from './api/index.js'
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]) // initalFetch
  const [updated, setUpdated] = useState([]) // to handle useEffect refresh

  console.log('state', customers)

  useEffect(() => {
    fetchData();
    // console.log(`mounted`,)
  },[updated])

  const handleEffect = payload => setUpdated(payload)

  console.log(`what is it`, updated)

  const fetchData = async () => {
    const result = await getAllCustomer();
    setCustomers(result)
  }

  return (
    <div className="App">
      <Navbar
        handleEffect={handleEffect} 
      />
      <TableData 
        customers={customers}
        handleEffect={handleEffect}
      />
    </div>
  );
}

export default App;
