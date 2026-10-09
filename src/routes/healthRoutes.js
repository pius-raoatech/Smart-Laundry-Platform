import express from 'express';
import { getHealth } from '../controllers/healthController.js';
import { requireRole } from '../middleware/roleCheck.js';

const router = express.Router();

router.get('/', requireRole(['superadmin']), getHealth);

export default router;