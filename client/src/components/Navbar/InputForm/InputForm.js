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

const InputForm = ({ handleClose }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    
    createCustomer(firstName, lastName, age, location).then(res => console.log(res))

    handleClose(true)
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h5">New Customer Details</Typography>
        <TextField id="filled-basic" label="First Name" variant="filled" onChange={e => setFirstName(e.target.value)}/>
        <TextField id="filled-basic" type=""label="Last Name" variant="filled" onChange={e => setLastName(e.target.value)}/>
        <TextField id="outlined-basic" label="Age" type="number" variant="outlined" onChange={e => setAge(e.target.value)}/>
        <TextField id="filled-basic" label="Location" variant="filled" onChange={e => setLocation(e.target.value)}/>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>      
    </>
  )
}

export default InputForm
