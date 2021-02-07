import React from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 800,
    },
  },
}));

const InputForm = () => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5">Customer Details</Typography>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Age" variant="outlined" />
        <TextField id="outlined-basic" label="Remarks" variant="outlined" />
        <Button variant="contained" color="primary" onClick={() => console.log('submitted')}>Submit</Button>
      </form>      
    </>
  )
}

export default InputForm
