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

const UpdateForm = ({ customer, handleClose, handleEffect }) => {
  const classes = useStyles();

  const { id, firstName, lastName, age, location } = customer

  const [updateFName, setUpdateFName] = useState(firstName)
  const [updateLName, setUpdateLName] = useState(lastName)
  const [updateAge, setUpdateAge] = useState(age)
  const [updateLocation, setUpdateLocation] = useState(location)
  
  const handleUpdate = e => {
    e.preventDefault()
    
    updateCustomer(id, updateFName, updateLName, updateAge, updateLocation).then(res => console.log(res))

    const payload = {
      firstName : updateFName,
      lastName: updateLName,
      age: updateAge,
      location: updateLocation,
    }
    
    handleEffect(payload)
    handleClose(true)
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleUpdate}>
        <Typography variant="h5">Edit Customer Details</Typography>
        <TextField id="filled-basic" label={updateFName} variant="filled" onChange={e => setUpdateFName(e.target.value)}/>
        <TextField id="filled-basic" label={updateLName} variant="filled" onChange={e => setUpdateLName(e.target.value)}/>
        <TextField id="outlined-basic" label={updateAge} type="number" variant="outlined" onChange={e => setUpdateAge(e.target.value)}/>
        <TextField id="filled-basic" label={updateLocation} variant="filled" onChange={e => setUpdateLocation(e.target.value)}/>
        <Button variant="contained" color="primary" type="submit">Update</Button>
      </form>      
    </>
  )
}

export default UpdateForm
