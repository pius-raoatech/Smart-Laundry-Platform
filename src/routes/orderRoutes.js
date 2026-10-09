import express from 'express';
import { getOrders } from '../controllers/orderController.js';
import { requireRole } from '../middleware/roleCheck.js';

const router = express.Router();

router.get('/', requireRole(['superadmin', 'coordinator']), getOrders);

export default router;