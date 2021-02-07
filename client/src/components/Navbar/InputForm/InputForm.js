import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { createCustomer } from '../../../api/index'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 800,
    },
  },
}));

const InputForm = ({ handleClose }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [remarks, setRemarks] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    
    createCustomer(firstName, lastName, age, remarks).then(res => console.log(res))

    handleClose(true)
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h5">Customer Details</Typography>
        <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={e => setFirstName(e.target.value)}/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={e => setLastName(e.target.value)}/>
        <TextField id="outlined-basic" label="Age" variant="outlined" onChange={e => setAge(e.target.value)}/>
        <TextField id="outlined-basic" label="Remarks" variant="outlined" onChange={e => setRemarks(e.target.value)}/>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>      
    </>
  )
}

export default InputForm
