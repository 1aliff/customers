import React, { useState } from 'react'
import { AppBar, Modal, Backdrop, Fade, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputForm from './InputForm/InputForm'

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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen]= useState(false) // modal state

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="left"> Welcome to dashboard </Typography>
          <Button color="inherit" className={classes.button} onClick={() => handleOpen()}>Create New Customer</Button>
        </Toolbar>
      </AppBar>

      {/* modal */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <InputForm
              id="transition-modal-title"
              handleClose={handleClose}
            />
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </Fade>
      </Modal>

    </>
  )
}

export default Navbar
