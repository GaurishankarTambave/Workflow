import {express, Request , Responce} from 'express';
const router = express.router();

let port = 3000;
router.get('/', (req: Request, res: Responce)=>{

console.log("server is running")
});
