import { compare, hash } from "bcryptjs";
import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { Role } from "../entity/Role";
import { User } from "../entity/User";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import { RequestFailed } from "../response/RequestFailedResponse";
import { RoleType } from "./../types/RoleType";
import { getConnection } from "typeorm";
import { AuthRequest } from "../middlewares/AuthRequestContext";
import jwt from "jsonwebtoken";
import { Produk } from "../entity/Produk";
import dayjs from "dayjs";



export const store = async (req: Request, res: Response) => {
    try {
      const name: string = req.body.name;
      const price: number = req.body.price;
      const quantity: number = req.body.quantity;
      const category: string = req.body.category;
  
      if (!name) {
          return RequestFailed(res, 400, "name");
      }
      if (!price) {
          return RequestFailed(res, 400, "price");
      }
      if (!quantity) {
          return RequestFailed(res, 400, "quantity");
      }
      if (!category) {
          return RequestFailed(res, 400, "category");
      }
  
      const prodExist = await getConnection()
          .getRepository(Produk)
          .createQueryBuilder("produk")
          .where("produk.name = :name", { name })
          .getOne();
  
      if (prodExist) {
          return RequestFailed(res, 401, "Produk Existed");
      } else {
          const produk = new Produk();
            produk.name = name;
            produk.quantity = quantity;
            produk.price = price;
            produk.category = category;
            await produk.save();
      
            const produkResponse = classToPlain(produk);
            res.status(200).json({
              success: true,
              game: produkResponse,
            });
      }
    } catch (error) {
      return InternalServerError(res, error);
    }
  };


export const getAllProduk = async (req: Request, res: Response) => {
  try {
    const query = req.query.search;
    const produk = await getConnection()
      .getRepository(Produk)
      .createQueryBuilder("produk")
      .where("produk.deleted_at is NULL")
      .orderBy("produk.created_at", "DESC")
      .paginate();

    const { data, ...rest } = produk;
    const allproduk: any[] = [];
    data.forEach((user: Produk) => {
      allproduk.push(classToPlain(user));
    });
    res.status(200).json({
      success: true,
      produk: allproduk,
      ...rest,
    });
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getProdukById = async (req: Request, res: Response) => {
    try {
      const id = req.query.id;
      const produk = await getConnection()
        .getRepository(Produk)
        .createQueryBuilder("produk")
        .where("produk.id = :id", { id : id })
        .getOne();
  
      if (!produk) {
        return RequestFailed(res, 404, "produk");
      }
  
      const fetchProduk = classToPlain(produk);
      res.status(200).json({
        success: true,
        game: fetchProduk,
      });
    } catch (error) {
      return InternalServerError(res, error);
    }
  };

export const updateProduk = async (req: Request, res: Response) => {
    try {
      const name: string = req.body.name;
      const quantity: number = req.body.quantity;
      const price: number = req.body.price;
      const category: string = req.body.category;
  
      const id = req.query.id;
      const produk = await getConnection()
      .getRepository(Produk)
      .createQueryBuilder("produk")
      .where("produk.id = :id", { id : id })
      .getOne();
  
      if (!produk) {
        return RequestFailed(res, 404, "produk");
      }
      if (name) {
        produk.name = name;
      }
      if (quantity) {
        produk.quantity = quantity;
      }
      if (price) {
        produk.price = price;
      }
      if (category) {
        produk.category = category;
      }
  
      await produk.save();
  
      const produkResponse = classToPlain(produk);
      res.status(200).json({
        success: true,
        produk: produkResponse,
      });
    } catch (error) {
      return InternalServerError(res, error);
    }
};

export const deleteProduk = async (req: Request, res: Response) => {
    try {
     const id = req.query.id;
      const produk = await getConnection()
      .getRepository(Produk)
      .createQueryBuilder("produk")
      .where("produk.id = :id", { id : id })
      .getOne();
  
      if (!produk) {
        return RequestFailed(res, 404, "produk");
      }
  
      produk.deleted_at = dayjs().format();
      await produk.save();
  
      const produkResponse = classToPlain(produk);
      res.status(200).json({
        success: true,
        produk: produkResponse,
      });
    } catch (error) {
      return InternalServerError(res, error);
    }
  };