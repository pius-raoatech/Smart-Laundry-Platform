import express from 'express';
import { upload } from '../config/upload.js';
import { auditImage } from '../controllers/intakeController.js';

const router = express.Router();

router.post('/ai-audit', upload.single('image'), auditImage);

export default router;