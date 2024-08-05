import * as express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  login,
  BuyProduk,
} from "../controllers/UserController";
import { Auth } from "./../middlewares/Auth";

let router = express.Router();

router.get(`/list`, getAllUsers);
router.get(``, Auth, getUserById);
router.post(`/create`, createUser);
router.patch(`/update`, Auth, updateUser);
router.post(`/login`, login);
router.post(`/buy`, Auth, BuyProduk);

export = router;
