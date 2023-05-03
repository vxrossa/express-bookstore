import { injectable } from "inversify";
import { Controller } from "@common/Controller";

@injectable()
export class AuthController extends Controller {
  constructor() {
    super();

    this.bindRoutes([
      {
        path: "/login",
        method: "post",
        cb: this.login,
      },
    ]);
  }

  private async login() {}
}
