import {Component, Output, Input} from '@angular/core';

@Component({
  selector: 'standart-button',
  template: '<div class="btn-hang"><button class="standart-btn">{{btnText}}</button></div>',
  styleUrls:['standart-button.scss']
})
export class StandartBtnComponent {
  @Input('btnText') btnText:string;
}
