import { Router } from 'express'
import productsRoutes from './products.js'
import leadsRoutes from './leads.js'
import campaignsRoutes from './campaigns.js'
import dashboardRoutes from './dashboard.js'

const router = Router()

router.use('/products', productsRoutes)
router.use('/leads', leadsRoutes)
router.use('/campaigns', campaignsRoutes)
router.use('/dashboard', dashboardRoutes)

export default router
