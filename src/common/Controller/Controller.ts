import { Router } from "express";
import { injectable } from "inversify";
import { BaseControllerRoute } from "./BaseControllerRoute";

@injectable()
export class Controller {
  private readonly _router: Router;
  constructor() {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  protected bindRoutes(routes: BaseControllerRoute[]) {
    routes.forEach((route) => {
      const handler = route.cb.bind(this);

      this._router[route.method](route.path, [
        ...(route.middleware ?? []),
        handler,
      ]);
    });
  }
}
