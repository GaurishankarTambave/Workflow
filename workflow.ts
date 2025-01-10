import {express, Request , Responce} from 'express';
import { Workflow } from '../controller/workflow';
const router = express.router();


router.post('/workflow/create', async function (req: Request, res: Responce) {
    let executeResult: any = await Workflow.executeWorkfow(req);
    if (!executeResult.success) {
        return res.json(executeResult);
    }
});