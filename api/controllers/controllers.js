let customers = []

export const getCustomer = (req, res) => {
  res.send(customers)
}

export const createCustomer = (req, res) => {
  const newCustomer = req.body // get new cust from the body
  const newCustomerWithId = {id: Math.floor(1 + Math.random() * 100000000).toString(), ...newCustomer}// append id

  // console.log(typeof newCustomerWithId.id)
  customers.push(newCustomerWithId)
  res.send(`${newCustomerWithId.firstName} has been added`)
}

export const deleteCustomer = (req, res) => {
  let { id } = req.params

  customers = customers.filter(cust => cust.id !== id)
  console.log(customers)
  res.send(`User with ${id} id successfully deleted`)
}

export const getCustomerById = (req, res) => {
  const { id } = req.params
  // console.log(typeof id)
  const foundMe = customers.find((cust) => cust.id === id)

  res.send(foundMe)
}

export const updateCustomerById = (req, res) => {
  const { id } = req.params
  const { firstName, lastName, age, location } = req.body

  const customersToUpdate = customers.find((cust) => cust.id === id)

  if(firstName) customersToUpdate.firstName = firstName
  if(lastName) customersToUpdate.lastName = lastName
  if(age) customersToUpdate.age = age
  if(location) customersToUpdate.location = location

  res.send(`User with ${id} has been updated`)
}