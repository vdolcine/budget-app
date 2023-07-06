import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";

import apiRouter from "./routes/api.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.log);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost: ${PORT}`);
});
