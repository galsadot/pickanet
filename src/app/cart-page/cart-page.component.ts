import {Component, Output, Input} from '@angular/core';

@Component({
  selector: 'cart-page',
  templateUrl: 'cart-page.component.html',
  styleUrls: ['cart-page.component.scss']
})
export class CartPageComponent {
  @Input() cartItems;
}
