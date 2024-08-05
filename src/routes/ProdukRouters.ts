import * as express from "express";
import { deleteProduk, getAllProduk, getProdukById, store, updateProduk } from "../controllers/ProdukControllers";
import { Auth } from "../middlewares/Auth";

let router = express.Router();

router.post("/store", Auth, store);
router.get("/", Auth, getAllProduk);
router.get("/id", Auth, getProdukById);
router.put("/", Auth, updateProduk);
router.delete("/", Auth, deleteProduk);


export = router;
