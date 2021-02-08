import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Fade, Backdrop, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper, Typography, Button } from '@material-ui/core'

import { deleteUser } from '../../api/index'
import UpdateForm from './UpdateForm/UpdateForm'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    // padding: 20
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

const TABLE_HEADER = [
  'ID',
  'First Name',
  'Last Name',
  'Age',
  'Location',
  'Action'
]

const TableData = ({ customers }) => {
  const classes = useStyles();
  const total = customers.length
  const [open, setOpen] = useState(false) // modal state
  const [customerUpdate, setCustomerUpdate] = useState([])

  const handleClose = () => setOpen(false)

  const handleEdit = (customer) => {
    setOpen(true)
    setCustomerUpdate(customer)
  }

  const handleDelete = (id) => deleteUser(id)

  return (
    <>
      <Typography variant="h3" style={{ marginTop: 40, marginBottom: 30 }}>Customer List</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                TABLE_HEADER.map(header => (
                  <TableCell align="center">{header}</TableCell>
                  ))
                }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map((customer) => (
                <TableRow>
                  <TableCell component="th" align="center" scope="row">{customer.id}</TableCell>
                  <TableCell align="center" key={customer.firstName} >{customer.firstName}</TableCell>
                  <TableCell align="center" key={customer.lastName} >{customer.lastName}</TableCell>
                  <TableCell align="center" key={customer.age} >{customer.age}</TableCell>
                  <TableCell align="center" key={customer.location}>{customer.location}</TableCell>
                  <TableCell align="center" key={customer.id + 1}>
                  <Button variant="contained" color="primary" style={{ marginRight: 10 }} onClick={() => handleEdit(customer)}>
                    Edit
                  </Button>

                    <Button variant="contained" color="secondary" 
                      onClick={() => 
                        window.confirm(`Are you sure you want to delete this?`) && 
                        handleDelete(customer.id)}
                    > Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <div align="right" style={{ marginTop: 25, marginRight: 25 }}>
        <Typography variant="caption" gutterBottom>{`Showing ${total} results`}</Typography>
      </div>
      
      {/* modal render */}
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
              <UpdateForm
                id="transition-modal-title"
                handleClose={handleClose}
                customer={customerUpdate}
              />
            </div>
          </Fade>
        </Modal>
    </>
  )
}

export default TableData
