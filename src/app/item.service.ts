import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public getItem() {
    const item = new Item();

  }
}
