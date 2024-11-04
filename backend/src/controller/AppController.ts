import express from 'express'
import CustomerController from '@/controller/CustomerController'

const router = express.Router();

router.use('/customer', CustomerController);

router.get('/', async (req, res) => {
  res.send({ text: 'Hello' })
})

export default router;