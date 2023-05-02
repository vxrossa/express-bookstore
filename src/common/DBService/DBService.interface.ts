import { PrismaClient } from "@prisma/client";

export interface IDBService {
  getInstance: () => IDBService;
  getClient: () => PrismaClient;
}
