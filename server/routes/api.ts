import { Router, Request, Response } from 'express';
import overviewController from '../controllers/overviewController.js';

const router: Router = Router();

router.get(
  '/',
  overviewController.getBudget,
  overviewController.getActual,
  (req: Request, res: Response) => {
    return res.status(200).send([res.locals.overview, res.locals.actual]);
  }
);

router.post(
  '/category',
  overviewController.postCategory,
  overviewController.postBudget,
  (req: Request, res: Response) => {
    return res.status(200).send(`completed adding new category`);
  }
);

router.patch(
  '/category',
  overviewController.updateCategory,
  (req: Request, res: Response) => {
    return res.status(200).send(`completed updating category`);
  }
);

router.delete(
  '/category',
  overviewController.deleteCategory,
  (req: Request, res: Response) => {
    return res.status(200).send(`deleted ${res.locals.category_name} category`);
  }
);

export default router;
