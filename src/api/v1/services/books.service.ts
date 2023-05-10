import { inject } from "inversify";
import { IDBService } from "../../../common/DBService";
import { TYPES } from "../../../container/TYPES";

export class BooksService {
  constructor(@inject(TYPES.DBService) private db: IDBService) {}
}
