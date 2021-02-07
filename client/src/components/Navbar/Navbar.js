import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    border: '1px solid #fff'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="left"> Welcome to dashboard </Typography>
          <Button color="inherit" className={classes.button}>Create new user</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
