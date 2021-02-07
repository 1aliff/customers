import React, { useEffect, useState } from 'react'
import { Navbar } from './components/'
import './App.css';
import {getAllCustomer} from './api/index.js'

function App() {
  const [customers, setCustomers] = useState([])
  console.log('state', customers)

  useEffect(() => {
    fetchData();
    console.log(`mounted`)
  },[])

  const fetchData = async () => {
    const result = await getAllCustomer();
    setCustomers(result)
  }
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
