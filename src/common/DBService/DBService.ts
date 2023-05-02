import { PrismaClient } from "@prisma/client";
import { injectable } from "inversify";

import { IDBService } from "./DBService.interface";

@injectable()
export class DBService implements IDBService {
  private static _instance: DBService;

  private _client: PrismaClient;

  constructor() {
    this._client = new PrismaClient();
  }

  public getInstance() {
    if (!DBService._instance) {
      DBService._instance = new DBService();
      return DBService._instance;
    } else {
      return DBService._instance;
    }
  }

  public getClient() {
    return this._client;
  }
}
