import express from 'express'
import CustomerController from '@/controller/CustomerController'
import ProductController from '@/controller/ProductController'

const router = express.Router();

router.use('/customer', CustomerController);
router.use('/product', ProductController);

router.get('/', async (req, res) => {
  res.send({ text: 'Hello' })
})

export default router;