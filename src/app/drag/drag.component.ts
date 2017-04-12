/*
import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit{
  @Output('dragedData') dragedData;
  @Output() cartItem: EventEmitter<any> = new EventEmitter();

  public title:string = 'הרכיבו את הרשת המושלמת שלכם';
  public goToPayment:string = 'המשיכו לתשלום';

  public transferData:Array<Object> = [
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


  public net:Array<number> = [];
  public cartItems: Array<Object> = [];


  constructor(){}
  ngOnInit(){
    this.crateNet();
  }
  crateNet(){
    for(let i = 0; i < 200; i++){
      this.net.push(i);
    }
  }
  transferDataSuccess($event, square){

    // Create the sqaure object to transfer to the recieved data
    let testObj = new squareInfo();
    testObj.squareNum = this.net[square];
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
*/
