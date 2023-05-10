import { injectable } from "inversify";
import { Request, Response } from "express";
import { Controller } from "../../../common/Controller";
import { authMiddleware } from "../middleware/auth.middleware";

@injectable()
export class AuthController extends Controller {
  constructor() {
    super();

    this.bindRoutes([
      {
        path: "/login",
        method: "get",
        cb: this.login,
        middleware: [authMiddleware()],
      },
    ]);
  }

  private async login(req: Request, res: Response) {
    res.send({
      message: "hello world",
    });
  }
}
