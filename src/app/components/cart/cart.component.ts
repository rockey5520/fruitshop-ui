import { Component, OnInit } from '@angular/core';

import { CartModel } from './../../models/cart.model';
import { CartService } from './../../services/cart.service';
import { PaymentService } from './../../services/payment.service';
import { Observable, pipe } from 'rxjs';
import { map, reduce, filter, first } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Observable<Array<CartModel>>;
  displayedColumns: string[] = ['name', 'costPerItem', 'count', 'totalCost'];
  total: number;
  

  constructor(public cartService: CartService, public paymentService: PaymentService) { }

  ngOnInit(): void {
    this.updateData()
    this.cartService.update.subscribe((data: boolean) => {
      if (data) {
        this.updateData();
      }
    })
    this.paymentService.update.subscribe((data: boolean) => {
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

  
  pay(): void {
    this.cartList.subscribe((data) => {
      const cartId =  data.map(item => item.cartId).shift();
      this.paymentService.pay("11", cartId, this.total).subscribe(() => {
        this.paymentService.update.next(true)
      })
    })
    
  }

}
