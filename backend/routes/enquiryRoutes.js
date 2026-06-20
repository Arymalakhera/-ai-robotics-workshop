import express from 'express';
import { createEnquiry } from '../controllers/enquiryController.js';
import { validateEnquiry } from '../middleware/validateEnquiry.js';

const router = express.Router();

router.post('/enquiry', validateEnquiry, createEnquiry);

export default router;