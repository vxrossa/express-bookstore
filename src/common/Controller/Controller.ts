import { Router } from "express";
import { injectable } from "inversify";
import { IController } from "./Controller.interface";
import { BaseControllerRoute } from "./BaseControllerRoute";

@injectable()
export class Controller implements IController {
  private readonly _router: Router;
  constructor() {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  public bindRoutes(routes: BaseControllerRoute[]) {
    routes.forEach((route) => {
      const handler = route.cb.bind(this);
      this._router[route.method](route.path, handler);
    });
  }
}
