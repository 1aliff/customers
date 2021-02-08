import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { createCustomer } from '../../../api/index'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const InputForm = ({ handleEffect, handleClose }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    
    if(firstName.length === 0) alert ('Something is missing ;)')
    createCustomer(firstName, lastName, age, location).then(res => console.log(res))

    const payload = {
      firstName,
      lastName,
      age,
      location
    }

    handleEffect(payload)

    handleClose(true)
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h5">New Customer Details</Typography>
        <TextField label="First Name" variant="filled" onChange={e => setFirstName(e.target.value)}/>
        <TextField id="filled-required" type=""label="Last Name" variant="filled" onChange={e => setLastName(e.target.value)}/>
        <TextField id="filled-required" label="Age" type="number" variant="outlined" onChange={e => setAge(e.target.value)}/>
        <TextField id="filled-required" label="Location" variant="filled" onChange={e => setLocation(e.target.value)}/>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>      
    </>
  )
}

export default InputForm
