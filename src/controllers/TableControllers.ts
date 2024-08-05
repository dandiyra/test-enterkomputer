import { compare, hash } from "bcryptjs";
import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import { RequestFailed } from "../response/RequestFailedResponse";
import { getConnection } from "typeorm";
import { Table } from "../entity/Table";

export const store = async (req: Request, res: Response) => {
    try {
      const table_no: number = req.body.table_no;
  
      if (!table_no) {
          return RequestFailed(res, 400, "table_no");
      }
  
      const tableExist = await getConnection()
          .getRepository(Table)
          .createQueryBuilder("table")
          .where("table.table_no = :table_no", { table_no })
          .getOne();
  
      if (tableExist) {
          return RequestFailed(res, 401, "Table Existed");
      } else {
          const table = new Table();
            table.table_no = table_no;
            await table.save();
      
            const tableResponse = classToPlain(table);
            res.status(200).json({
              success: true,
              game: tableResponse,
            });
      }
    } catch (error) {
      return InternalServerError(res, error);
    }
  };

