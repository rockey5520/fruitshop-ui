import { Component, OnInit, Input } from '@angular/core';
import { FruitModel } from 'src/app/models/fruit.model';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-fruitcard',
  templateUrl: './fruitcard.component.html',
  styleUrls: ['./fruitcard.component.scss']
})
export class FruitcardComponent implements OnInit {

  @Input()
  fruit: FruitModel

  count: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.count = 0;

  }

  addToCount(): void {
    this.count++;
  }

  subToCount(): void {
    this.count--;
  }

  addToCart(): void {
    this.cartService.addToCart("1", this.fruit, this.count).subscribe(() => {
      this.cartService.update.next(true)
    })
  }
}
