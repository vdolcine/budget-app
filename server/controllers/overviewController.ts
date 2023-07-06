import { Request, Response, NextFunction, RequestHandler } from "express";
import db from "../database/expensesSQLmodels.js";

interface overviewControllerType {
  getBudget: RequestHandler,
  getActual: RequestHandler,
  postCategory: RequestHandler,
  postBudget: RequestHandler,
  updateCategory: RequestHandler,
  deleteCategory: RequestHandler
}

const overviewController: overviewControllerType = {
  getBudget: (req: Request, res: Response, next: NextFunction) => {
    const queryText = `SELECT * FROM overview_june_2023 o JOIN categories c ON c.category_id = o.category_id`;
    db.sqlquery(queryText, undefined, (err: any, result: any) => {
      if (!result) {
        next({
          log: `ERROR: Could not retrieve data from overviewController.getBudet`,
        });
      }
      res.locals.overview = result.rows;
      next();
    });
  },
  getActual: (req: Request, res: Response, next: NextFunction) => {
    const queryText = `SELECT category_id, sum(item_value) FROM expenses_june_2023 GROUP BY category_id`;
    db.sqlquery(queryText, undefined, (err: any, result: any) => {
      if (!result) {
        next({
          log: `ERROR: Could not retrieve data from overviewController.getActual`,
        });
      }
      res.locals.actual = result.rows;
      next();
    });
  },
  postCategory: (req: Request, res: Response, next: NextFunction) => {
    const { new_category } = req.body;
    const queryParamsCategory = [ new_category, "false" ];
    const queryTextCategory = `INSERT INTO categories (category_name, base_expense) VALUES ($1, $2) RETURNING *`;
    db.sqlquery(
      queryTextCategory,
      queryParamsCategory,
      (err: any, result: any) => {
        if (!result) {
          next({
            log: `ERROR: Could not post category from overviewController.postCategory`,
          });
        }
        res.locals.category_id = result.rows[0].category_id;
        next();
      }
    );
  },
  postBudget: (req: Request, res: Response, next: NextFunction) => {
    const { budget } = req.body;
    const queryParamsBudget = [ budget, res.locals.category_id ];
    const queryTextBudget = `INSERT INTO overview_june_2023 (total_category, category_id) VALUES ($1, $2) RETURNING *`;
    db.sqlquery(queryTextBudget, queryParamsBudget, (err: any, result: any) => {
      if (!result) {
        next({
          log: `ERROR: Could not post budget from overviewController.postCategory `,
        });
      }
      next();
    });
  },
  updateCategory: (req: Request, res: Response, next: NextFunction) => {
    const { id, total } = req.body;
    const queryParams = [ total, id ]
    const queryText = `UPDATE overview_june_2023 SET total_category = ($1) WHERE category_id = ($2) RETURNING *`;
    db.sqlquery(queryText, queryParams, (err: any, result: any) => {
      if (!result) {
        next({
          log: `ERROR: Could not update data from overviewController.updateCategory`,
        });
      }
      next();
    });
  },
  deleteCategory: (req: Request, res: Response, next: NextFunction) => {
    
  }
};

export default overviewController;
