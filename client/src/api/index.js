export const getAllCustomer = async () => {
  try {
    const result = await fetch(`/customers`)
      const customers = await result.json();
      return customers;
  } catch (err) {
    alert(`Something went wrong: ${err}`)
  }
}

export const createCustomer = async (firstName, lastName, age, remarks) => {
  try{
    const result = await fetch(`/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        age,
        remarks
      })
    })
    return await result
  }catch (err){
    alert(`Something went wrong: ${err}`)
  }
}
