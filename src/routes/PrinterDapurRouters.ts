import * as express from "express";
import { Auth } from "./../middlewares/Auth";
import { getAllPrinterDapur } from "../controllers/OrderController";

let router = express.Router();

router.get(`/`, Auth, getAllPrinterDapur);


export = router;
