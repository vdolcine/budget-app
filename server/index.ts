import express, { Express, Request, Response } from "express";
import "dotenv/config";

import apiRouter from './routes/api.js';

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost: ${PORT}`);
});
