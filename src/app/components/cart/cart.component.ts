import { Component, OnInit } from '@angular/core';

import { CartModel } from './../../models/cart.model';
import { CartService } from './../../services/cart.service';
import { Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Observable<Array<CartModel>>;
  total: number;


  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.updateData()
    this.cartService.update.subscribe((data: boolean) => {
      if (data) {
        this.updateData();
      }
    })
  }

  updateData() {
    this.cartList = this.cartService.getCartByID("1");
    this.total = 0;
    this.cartList.subscribe((data) => {
      this.total = data.map(item => item.totalCost).reduce((a, b) => a + b, 0);
    })
  }


  // public getCartTotal():Observable<number> {
  //   return this.cartList.pipe(map(item => item.reduce((total, item) => total + item.totalCost, 0)));
  // }
}
