import express from 'express'
import { getCustomer, createCustomer, deleteCustomer, getCustomerById, updateCustomerById } from '../controllers/controllers.js'

const router = express.Router();

router.get('/', getCustomer)

router.post('/', createCustomer)

router.get('/:id', getCustomerById)

router.delete('/:id', deleteCustomer)

router.patch('/:id', updateCustomerById)


export default router;