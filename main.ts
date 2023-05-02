import * as dotenv from "dotenv";
import "module-alias/register.js";
import "reflect-metadata";
import { Container } from "inversify";

import { App } from "@/App";
import { BookController } from "@/api/v1/controllers/books.controller";
import { CategoriesController } from "@/api/v1/controllers/categories.controller";
import { CategoriesService } from "@/api/v1/services/categories.service";
import { DBService, IDBService } from "@common/DBService";

import { TYPES } from "./src/container/TYPES";

dotenv.config();

async function bootstrap() {
  const container = new Container();
  container.bind<App>(TYPES.App).to(App);
  container.bind<IDBService>(TYPES.DBService).to(DBService);
  container
    .bind<CategoriesService>(TYPES.CategoriesService)
    .to(CategoriesService);
  container.bind<BookController>(TYPES.BookController).to(BookController);
  container
    .bind<CategoriesController>(TYPES.CategoriesController)
    .to(CategoriesController);

  const app = container.get<App>(TYPES.App);

  await app.run();
}

bootstrap();
