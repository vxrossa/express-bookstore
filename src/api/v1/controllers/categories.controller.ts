import { Controller } from "@common/Controller";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { CategoriesService } from "@/api/v1/services/categories.service";
import { TYPES } from "@container/TYPES";
import { authMiddleware } from "@/api/v1/middleware/auth.middleware";

@injectable()
export class CategoriesController extends Controller {
  constructor(
    @inject(TYPES.CategoriesService) private _service: CategoriesService
  ) {
    super();

    this.bindRoutes([
      {
        path: "/categories",
        method: "get",
        cb: this.getCategories,
        middleware: [authMiddleware()],
      },
    ]);
  }
  public async getCategories(req: Request, res: Response) {
    const result = await this._service.getCategories();

    res.json(result);
  }
}
