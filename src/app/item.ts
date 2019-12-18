import {Category} from './category';
import {Location} from './location';

export class Item {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _item: string;
  // tslint:disable-next-line:variable-name
  private _tombo: number;
  // tslint:disable-next-line:variable-name
  private _location: Location;
  // tslint:disable-next-line:variable-name
  private _category: Category;
  // tslint:disable-next-line:variable-name
  private _description: string;

  constructor() {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get item(): string {
    return this._item;
  }

  set item(value: string) {
    this._item = value;
  }

  get tombo(): number {
    return this._tombo;
  }

  set tombo(value: number) {
    this._tombo = value;
  }

  get location(): Location {
    return this._location;
  }

  set location(value: Location) {
    this._location = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
