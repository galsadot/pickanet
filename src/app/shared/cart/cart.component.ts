import {Component, Output, Input} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})
export class AppCartComponent {
  @Input('cartItems') cartItems;

  removeItem(item){
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
  }

}
