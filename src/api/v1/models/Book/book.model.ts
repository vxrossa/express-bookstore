import { IBook } from "./book.interface";

export class Book implements IBook {
  public name: string;
  author: string;
  rating: number;
  year: string;
  constructor() {
    this.name = "";
    this.author = "";
    this.rating = 0;
    this.year = "0000";
  }
}
