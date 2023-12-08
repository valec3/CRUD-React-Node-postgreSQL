import { Router } from 'express';
import { getReportView } from '../controllers/reportes.controller.js';

const router = Router();

router.get('/view', getReportView);


export default router;