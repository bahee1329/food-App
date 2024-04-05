import { Injectable } from '@angular/core';
import { FoodItems } from '../Types';
import { data } from '../../sampleData';

@Injectable({
  providedIn: 'root',
})
export class FoodapiService {
  constructor() {}

  getAll(): FoodItems[] {
    return data;
  }

  getProductForSearch(searchTerm: string): FoodItems[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
