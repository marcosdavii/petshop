import { CartUtil } from './../../../utils/cart.util';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();

  constructor(public httpclient: HttpClient) { }

  ngOnInit() {
    this.loadCart();
  }

  public total() {
    let total = 0;
    this.cart.items.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total;
  }


  public loadCart() {
    this.cart = CartUtil.get();
  }

  public remove(item) {
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
  }

  public clear() {
    CartUtil.clear()
    this.loadCart();
  }

}
