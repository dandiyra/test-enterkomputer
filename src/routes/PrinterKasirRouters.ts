import * as express from "express";
import { Auth } from "./../middlewares/Auth";
import { getAllKasir } from "../controllers/OrderController";

let router = express.Router();

router.get(`/`, Auth, getAllKasir);


export = router;
