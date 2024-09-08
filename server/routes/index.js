import express from 'express';

import bookRouter from './book.js';

const router = express.Router();

router.use('/book', bookRouter);

export default router;

