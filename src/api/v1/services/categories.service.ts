import { inject, injectable } from "inversify";
import { IDBService } from "@common/DBService";
import { TYPES } from "@container/TYPES";

@injectable()
export class CategoriesService {
  constructor(@inject(TYPES.DBService) private db: IDBService) {
    this.db = db.getInstance();
  }

  public async getCategories() {
    const res = await this.db.getClient().category.findMany();

    return res;
  }
}
