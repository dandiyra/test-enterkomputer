import { compare, hash } from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../entity/User";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import { RequestFailed } from "../response/RequestFailedResponse";
import { getConnection } from "typeorm";
import { AuthRequest } from "../middlewares/AuthRequestContext";
import jwt from "jsonwebtoken";
import { Produk } from "../entity/Produk";
import { PrinterDapur } from "../entity/PrinterDapur";
import { PrinterBar } from "../entity/PrinterBar";
import { PrinterKasir } from "../entity/PrinterKasir";
import { Table } from "../entity/Table";
import { Order } from "../entity/Order";
import { classToPlain } from "class-transformer";
import dayjs from "dayjs";


export const CreateOrder = async (req: AuthRequest, res: Response) => {
  try {
    const product_id: number = req.body.product_id;
    const quantity: number = req.body.quantity;
    const table_id: number = req.body.table_id;

    const user = await User.findOne(req.userId);
    if (!user) {
      return RequestFailed(res, 404, "user", req.userId);
    }
    const table = await Table.findOne(table_id);
    if (!table) {
      return RequestFailed(res, 404, "table", table_id);
    }

    const produk = await getConnection()
    .getRepository(Produk)
    .createQueryBuilder("produk")
    .where("produk.id = :id", { id : product_id })
    .getOne();

    if (!produk) {
      return RequestFailed(res, 404, "produk");
    }

    if (produk.category == "Makanan" || "Promo") {
        const dapur = new PrinterDapur();
        dapur.name = produk.name;
        dapur.quantity = quantity;
        dapur.table_no = table.table_no;
        await dapur.save();
    }
    if (produk.category == "Minuman" || "Promo") {
        const bar = new PrinterBar();
        bar.name = produk.name;
        bar.quantity = quantity;
        bar.table_no = table.table_no;
        await bar.save();
    }

    const price = produk.price;
    const totalprice = produk.price * quantity;
    
    if (produk) {
        const kasir = new PrinterKasir();
        kasir.user_id = user.id,
        kasir.product_id = product_id,
        kasir.quantity = quantity,
        kasir.price = totalprice,
        kasir.table_id = table.table_no
        await kasir.save();
    }
    if (produk) {
        const order = new Order();
        order.user_id = user.id,
        order.product_id = product_id,
        order.quantity = quantity,
        order.price = totalprice,
        order.table_id = table.table_no
        await order.save();
    }

    res.status(200).json({
            success: true,
            username : user.firstName,
            produk_name : produk.name,
            quantity  : quantity,
            table_no  : table.table_no,
            total : totalprice,
          });

  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllOrder = async (req: Request, res: Response) => {
    try {
      const query = req.query.search;
      const order = await getConnection()
        .getRepository(Order)
        .createQueryBuilder("order")
        .where("order.deleted_at is NULL")
        .orderBy("order.created_at", "DESC")
        .paginate();
  
      const { data, ...rest } = order;
      const allorder: any[] = [];
      data.forEach((user: Order) => {
        allorder.push(classToPlain(user));
      });
      res.status(200).json({
        success: true,
        order: allorder,
        ...rest,
      });
    } catch (error) {
      return InternalServerError(res, error);
    }
  };

export const getAllKasir = async (req: Request, res: Response) => {
    try {
      const query = req.query.search;
      const printerKasir = await getConnection()
        .getRepository(PrinterKasir)
        .createQueryBuilder("printerKasir")
        .where("printerKasir.deleted_at is NULL")
        .orderBy("printerKasir.created_at", "DESC")
        .paginate();
  
      const { data, ...rest } = printerKasir;
      const allkasir: any[] = [];
      data.forEach((user: PrinterKasir) => {
        allkasir.push(classToPlain(user));
      });
      res.status(200).json({
        success: true,
        printerKasir: allkasir,
        ...rest,
      });
    } catch (error) {
      return InternalServerError(res, error);
    }
  };

export const getAllPrinterBar = async (req: Request, res: Response) => {
    try {
      const query = req.query.search;
      const printerBar = await getConnection()
        .getRepository(PrinterBar)
        .createQueryBuilder("printerBar")
        .paginate();
  
      const { data, ...rest } = printerBar;
      const allbar: any[] = [];
      data.forEach((user: PrinterBar) => {
        allbar.push(classToPlain(user));
      });
      res.status(200).json({
        success: true,
        printerBar: allbar,
        ...rest,
      });
    } catch (error) {
      return InternalServerError(res, error);
    }
  };

export const getAllPrinterDapur = async (req: Request, res: Response) => {
    try {
      const query = req.query.search;
      const printerDapur = await getConnection()
        .getRepository(PrinterDapur)
        .createQueryBuilder("printerDapur")
        .paginate();
  
      const { data, ...rest } = printerDapur;
      const alldapur: any[] = [];
      data.forEach((user: PrinterDapur) => {
        alldapur.push(classToPlain(user));
      });
      res.status(200).json({
        success: true,
        printerDapur: alldapur,
        ...rest,
      });
    } catch (error) {
      return InternalServerError(res, error);
    }
  };
  
export const getBiil = async (req: AuthRequest, res: Response) => {
  try {
    const table_id: number = req.body.table_id;

    const user = await User.findOne(req.userId);
    if (!user) {
      return RequestFailed(res, 404, "user", req.userId);
    }
    const product = await getConnection()
    .getRepository(PrinterKasir)
    .createQueryBuilder("printerKasir")
    .leftJoinAndSelect("printerKasir.produk", "produk")
    .select([
        'produk.name as name',
        'produk.price as price',
        'printerKasir.quantity as quantity'
    ])
    .where("printerKasir.table_id = :table_id", { table_id : table_id })
    .getRawMany();

    const totalPrice = await getConnection()
    .getRepository(PrinterKasir)
    .createQueryBuilder("printerKasir")
    .leftJoinAndSelect("printerKasir.produk", "produk")
    .select('SUM(printerKasir.price)', 'total_price')
    .where("printerKasir.table_id = :table_id", { table_id : table_id })
    .getRawOne();

    if (!totalPrice) {
      return RequestFailed(res, 404, "kasir");
    }

    res.status(200).json({
            success: true,
            table_no  : table_id,
            product : product,
            price    : totalPrice,
          });

  } catch (error) {
    return InternalServerError(res, error);
  }
};
