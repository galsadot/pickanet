import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent {
  @Output('dragedData') dragedData;
  @Output() cartItem: EventEmitter<any> = new EventEmitter();

  title = 'הרכיבו את הרשת המושלמת שלכם';
  goToPayment = 'המשיכו לתשלום';

  transferData:Array<Object> = [
    {id:1, name: 'Hello', pic: '../../assets/images/clip1.png'},
    {id:2, name: 'Hello1', pic: '../../assets/images/pic.jpg'},
    {id:3, name: 'Hello2', pic: '../../assets/images/clip1.png'},
    {id:4, name: 'Hello3', pic: '../../assets/images/pic.jpg'},
    {id:5, name: 'Hello4', pic: '../../assets/images/clip1.png'},
    {id:6, name: 'Hello5', pic: '../../assets/images/pic.jpg'}
    //{id:1, name: 'Hello', pic: 'https://s3-us-west-1.amazonaws.com/pickanet/assets/images/clip1.png'},
    //{id:2, name: 'Hello', pic: 'https://s3-us-west-1.amazonaws.com/pickanet/assets/images/pic.jpg'},
    //{id:3, name: 'Hello', pic: 'https://s3-us-west-1.amazonaws.com/pickanet/assets/images/clip1.png'},
    //{id:4, name: 'Hello', pic: 'https://s3-us-west-1.amazonaws.com/pickanet/assets/images/pic.jpg'},
    //{id:5, name: 'Hello', pic: 'https://s3-us-west-1.amazonaws.com/pickanet/assets/images/clip1.png'},
    //{id:6, name: 'Hello', pic: 'https://s3-us-west-1.amazonaws.com/pickanet/assets/images/pic.jpg'}
  ];
  net:Array<number> = [0,1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
                      27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,
                      52, 53,54,55,56,57,58,59,61,62,63,64,65,66,67,68,69, 70, 71,72,73,74,75,76,
                      77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,
                      104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,
                      126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,
                      150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169];

  cartItems: Array<Object> = [];
  constructor(){}

  transferDataSuccess($event, square){

    // Create the sqaure object to transfer to the recieved data
    let testObj = new squareInfo();
    testObj.squareNum = square;
    testObj.pic = $event.dragData.pic;
    testObj.name = $event.dragData.name;
    testObj.id = $event.dragData.id;

    // Push to the recieved data
    this.cartItems.push(testObj);

  }
  returnSuccess($event){
    this.cartItems.splice(this.cartItems.indexOf( $event.dragData), 1);
  }

  showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let coords = "X coords: " + x + ", Y coords: " + y;
    console.log('gululul', coords);
  }
}

export class squareInfo{
  id = 0;
  squareNum = 0;
  pic = "";
  name = '';
}
