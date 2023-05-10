import express, { Express, Router } from "express";
import { json } from "body-parser";
import { inject, injectable } from "inversify";
import { TYPES } from "./container/TYPES";
import { BookController } from "./api/v1/controllers/books.controller";
import { CategoriesController } from "./api/v1/controllers/categories.controller";

@injectable()
export class App {
  private _app: Express;

  private readonly _port: number | string;

  private static _apiPrefix = "/api/v1";

  constructor(
    @inject(TYPES.BookController) private bookController: BookController,
    @inject(TYPES.CategoriesController)
    private categoriesController: CategoriesController
  ) {
    this._app = express();
    this._port = process.env.PORT || 5000;
  }

  private _applyConfig() {
    this._app.use(json());
  }

  public async run() {
    const prefixRouter = Router();
    prefixRouter.use(this.bookController.router);
    prefixRouter.use(this.categoriesController.router);

    this._app.use(App._apiPrefix, prefixRouter);
    this._applyConfig();

    this._app.listen(this._port, () => {
      console.log("App is running on port " + this._port);
    });
  }
}
