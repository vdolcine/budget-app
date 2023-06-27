import { Router, Request, Response } from 'express';
import overviewController from '../controllers/overviewController.js';

const router: Router = Router();

router.get('/', overviewController.getBudget, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.overview);
})

router.get('/test', (req: Request, res: Response) => {
  return res.status(200).send(`testing...test, test, test`);
})

export default router;