import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper, Typography, Button } from '@material-ui/core'

import { deleteUser } from '../../api/index'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    // padding: 20
  },
});

const TABLE_HEADER = [
  'ID',
  'First Name',
  'Last Name',
  'Age',
  'Remarks',
  'Action'
]

const TableData = ({ customers }) => {
  const classes = useStyles();

  const total = customers.length

  const handleDelete = (id) => {
    deleteUser(id)
  }

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
            {customers.map((customer) => (
              <TableRow>
                <TableCell component="th" align="center" scope="row">{customer.id}</TableCell>
                <TableCell align="center" key={customer.firstName} >{customer.firstName}</TableCell>
                <TableCell align="center" key={customer.lastName} >{customer.lastName}</TableCell>
                <TableCell align="center" key={customer.age} >{customer.age}</TableCell>
                <TableCell align="center" key={customer.remarks}>{customer.remarks}</TableCell>
                <TableCell align="center" key={customer.id + 1}>
                <Button 
                    variant="contained" 
                    color="primary"
                    style={{ marginRight: 10 }}
                    onClick={() => console.log('Editted triggered')}
                  >
                      Edit
                  </Button>

                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => 
                      window.confirm(`Are you sure you want to delete this?`) && 
                      handleDelete(customer.id)}
                  >
                      Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div align="right" style={{ marginTop: 25, marginRight: 25 }}>
        <Typography variant="caption" gutterBottom>{`Showing ${total} results`}</Typography>
      </div>
    </>
  )
}

export default TableData
