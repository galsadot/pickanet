import {Component, OnInit} from '@angular/core';
import {Net} from "./nets/nets";
import {NetService} from "./nets/net.service";
import {Extra} from "./extras/extras";
import {ExtraService} from "./extras/extras.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})
export class AppCartComponent implements OnInit{

  constructor(private _netservice: NetService, private _extraervice: ExtraService){}

  netTitle = 'בחר את סוג הרשת';
  accesoriesTitle = 'בחר את הפריטים המשלימים לרשת שלך';
  errorMessage: string;
  public nets:Net[];
  public extras:Extra[];
  selectedNet: Net;
  selectedExtras: Extra[] = [];

  ngOnInit() {
    this.getNets();
    this.getExtras();

  }

  onNetSelect(net: Net)
  {
    if(this.selectedNet == net)
    {
      this.selectedNet = null;
    }

    else
    {
      this.selectedNet = net;
    }


    console.log(net.ID);
  }

  getNets() {
    this._netservice.getNets()
      .subscribe(
        value => this.nets = value,
        error => this.errorMessage = <any>error);
    console.log(this.nets);
  }

  getExtras() {
    this._extraervice.getExtras()
      .subscribe(
        value => this.extras = value,
        error => this.errorMessage = <any>error);
  }
}
