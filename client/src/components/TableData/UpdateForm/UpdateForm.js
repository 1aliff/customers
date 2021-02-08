import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { updateCustomer } from '../../../api/index'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const UpdateForm = ({ customer, handleClose }) => {
  const classes = useStyles();
  const id = customer.id
  const [firstName, setFirstName] = useState(customer.firstName)
  const [lastName, setLastName] = useState(customer.lastName)
  const [age, setAge] = useState(customer.age)
  const [location, setLocation] = useState(customer.location)
  
  const handleUpdate = e => {
    e.preventDefault()
    
    updateCustomer(id, firstName, lastName, age, location).then(res => console.log(res))

    handleClose(true)
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleUpdate}>
        <Typography variant="h5">Edit Customer Details</Typography>
        <TextField id="filled-basic" label={customer.firstName} variant="filled" onChange={e => setFirstName(e.target.value)}/>
        <TextField id="filled-basic" label={customer.lastName} variant="filled" onChange={e => setLastName(e.target.value)}/>
        <TextField id="outlined-basic" label={customer.age} type="number" variant="outlined" onChange={e => setAge(e.target.value)}/>
        <TextField id="filled-basic" label={customer.location} variant="filled" onChange={e => setLocation(e.target.value)}/>
        <Button variant="contained" color="primary" type="submit">Update</Button>
      </form>      
    </>
  )
}

export default UpdateForm
