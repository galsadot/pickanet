import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Net} from "./nets";

@Injectable()
export class NetService {

  public values: any;

  constructor(public _http: Http) { }

  /*private _netsUrl = "../../../../data/nets.data";*/
  private _netsUrl = 'https://3pulqmr2h5.execute-api.eu-central-1.amazonaws.com/v1/nets'; // URL to web api

  getNets() {
   // let headers = new Headers({'Access-Control-Allow-Origin' : 'true'});
    //let options = new RequestOptions({ headers: headers });

    return this._http.get(this._netsUrl)
      .map(res => <Net[]>res.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
