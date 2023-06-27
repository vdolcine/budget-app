import { Request, Response, NextFunction, RequestHandler } from 'express';
import db from '../database/expensesSQLmodels.js';

interface overviewControllerType {
  getBudget: RequestHandler,
}

const overviewController: overviewControllerType = {
  getBudget: (req: Request, res: Response, next: NextFunction) => {
    const queryText = `SELECT * FROM overview_june_2023`;
    db.sqlquery(queryText, undefined, (err: any, result: any) => {
      if (!result) {
        res.send(`ERROR: Could not retrieve data from overviewController.getBudet`)
      }
      res.locals.overview = result.rows;
      next();
    })
  }
};

export default overviewController;