import { injectable } from "inversify";
import { Controller } from "@common/Controller";
import { authMiddleware } from "@/api/v1/middleware/auth.middleware";
import { Response } from "express";

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

  private async login(_, res: Response) {
    res.send({
      message: "hello world",
    });
  }
}
