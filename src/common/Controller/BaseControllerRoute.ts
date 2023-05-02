import { Request, Response } from "express";

export interface BaseControllerRoute {
  method: "get" | "post" | "put" | "delete" | "patch";
  path: string;
  cb: (req: Request, res: Response) => void;
}
