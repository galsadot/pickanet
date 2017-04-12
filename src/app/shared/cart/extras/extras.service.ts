import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Extra} from "./extras";

@Injectable()
export class ExtraService {

  public values: any;

  constructor(public _http: Http) { }

  private _extrasUrl = 'https://3pulqmr2h5.execute-api.eu-central-1.amazonaws.com/v1/extras'; // URL to web api

  getExtras() {
    return this._http.get(this._extrasUrl )
      .map(res => <Extra[]>res.json())
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
