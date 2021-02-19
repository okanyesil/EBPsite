import { Injectable } from '@angular/core';
import {ShoppingCartService} from '../../shared/services/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartDbService {

  constructor(private db: ShoppingCartService) { }

  getData() {
    return this.db.getShoppingCart();
  }
}
