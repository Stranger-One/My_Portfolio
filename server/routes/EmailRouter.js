import express from 'express';
import { sendEmailToMe } from '../controllers/EmailController.js';

const router = express.Router();

// POST route to send email
router.post('/send', sendEmailToMe);

export default router;