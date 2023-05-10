import { Request, Response } from "express";
import { Controller } from "../../../common/Controller";
import { injectable } from "inversify";

@injectable()
export class BookController extends Controller {
  constructor() {
    super();

    this.bindRoutes([
      {
        path: "/books",
        method: "get",
        cb: this.getBooks,
      },
    ]);
  }

  public async getBooks(req: Request, res: Response) {
    res.json({
      books: [],
    });
  }
}
