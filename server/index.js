import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/index.js';

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`API Server is started on port ${port}!`)
})