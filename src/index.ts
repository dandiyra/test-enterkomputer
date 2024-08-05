import * as dotenv from "dotenv";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { pagination } from "typeorm-pagination";
import roleRouter from "./routes/RoleRouters";
import usersRouter from "./routes/UserRoutes";
import produkRouter from "./routes/ProdukRouters";
import orderRouter from "./routes/OrderRouters";
import printerBarRouter from "./routes/PrinterBarRouters";
import printerDapurRouter from "./routes/PrinterDapurRouters";
import printerKasirRouter from "./routes/PrinterKasirRouters";
import tableRouter from "./routes/TableRouters";

dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(pagination);

app.use("/role", roleRouter);
app.use("/user", usersRouter);
app.use("/produk", produkRouter);
app.use("/order", orderRouter);
app.use("/printer-bar", printerBarRouter);
app.use("/printer-dapur", printerDapurRouter);
app.use("/printer-kasir", printerKasirRouter);
app.use("/table", tableRouter);
app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message:
      "You are on node-typescript-boilderplate. You should not have further access from here.",
  });
});

createConnection()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`CONNECTED TO DB AND SERVER STARTED ON PORT  ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
