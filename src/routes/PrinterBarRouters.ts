import * as express from "express";
import { Auth } from "./../middlewares/Auth";
import {  getAllPrinterBar } from "../controllers/OrderController";

let router = express.Router();

router.get(`/`, Auth, getAllPrinterBar);


export = router;
