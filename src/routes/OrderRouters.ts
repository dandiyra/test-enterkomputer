import * as express from "express";
import { Auth } from "./../middlewares/Auth";
import { CreateOrder, getAllOrder, getBiil } from "../controllers/OrderController";

let router = express.Router();

router.post(`/create`, Auth, CreateOrder);
router.get(`/bill`, Auth, getBiil);
router.get(`/`, Auth, getAllOrder);


export = router;
