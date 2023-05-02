import { BaseControllerRoute } from "./BaseControllerRoute";

export interface IController {
  bindRoutes: (routes: BaseControllerRoute[]) => void;
}
