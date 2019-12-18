import { Injectable } from '@angular/core';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  // @ts-ignore
  public getCategory(): Category {
    const category = new Category();
    category.id = 1;
    category.category = 'Eletronicos';
    category.description = 'Aparelhos';

    return category;
  }
}
