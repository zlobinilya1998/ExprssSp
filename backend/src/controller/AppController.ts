import express from 'express'
import CustomerController from '@/controller/CustomerController'
import ProductController from '@/controller/ProductController'
import ProductCategoryController from '@/controller/ProductCategoryController'
import OrderController from '@/controller/OrderController'

const router = express.Router();

router.use('/customer', CustomerController);
router.use('/product', ProductController);
router.use('/product-category', ProductCategoryController)
router.use('/order', OrderController);
router.get('/', async (req, res) => {
  res.send({ text: 'Hello' })
})

export default router;