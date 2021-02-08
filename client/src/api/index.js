export const getAllCustomer = async () => {
  try {
    const result = await fetch(`/customers`)
      const customers = await result.json();
      return customers;
  } catch (err) {
    alert(`Something went wrong: ${err}`)
  }
}

export const createCustomer = async (firstName, lastName, age, location) => {
  try {
    const result = await fetch(`/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        age,
        location
      })
    })

    return await result
  }catch (err) {
    alert(`Something went wrong: ${err}`)
  }
}

export const deleteUser = async (id) => {
  try {
    const result = await fetch(`/customers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
    return await result
  } catch (err) {
    alert(`Something went wrong: ${err}`)
  }
}

export const updateCustomer = async (id, firstName, lastName, age, location) => {
  try {
    const result = await fetch(`/customers/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        age,
        location
      })
    })
  } catch (err) {
    alert(`Something went wrong: ${err}`)
  }
}