import { NextFunction, Request, Response } from "express";

interface Middleware {}

export interface BaseControllerRoute {
  method: "get" | "post" | "put" | "delete" | "patch";
  path: string;
  cb: (req: Request, res: Response) => void;
  middleware?: ((req: Request, res: Response, next: NextFunction) => void)[];
}
