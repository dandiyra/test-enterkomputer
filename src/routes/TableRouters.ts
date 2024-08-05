import * as express from "express";
import { Auth } from "./../middlewares/Auth";
import { store } from "../controllers/TableControllers";

let router = express.Router();

router.post(`/store`, Auth, store);


export = router;
