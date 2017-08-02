import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the StockServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StockServiceProvider {

  //private url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=1min&apikey=Z2Y34EI7GC6K7BJD&symbol=";
  //private urlp1: string = "https://www.quandl.com/api/v3/datasets/EOD/";
  //private urlp2: string = ".json?rows=1&order=desc&column_index=4&api_key=_kcySFqgvmP48esnJvJW";

  private urlP1: string = "https://www.quandl.com/api/v3/datasets/EOD/";
  private urlP2: string = ".json?rows=1&order=desc&api_key=_kcySFqgvmP48esnJvJW";

  constructor(private http: Http) {
    console.log('Hello StockServiceProvider Provider');
  }

  getStock(stock){
    return this.http.get(this.urlP1 + stock + this.urlP2)/* + stock*/
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.catchError)
  }

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Server error.");
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res.json();
  }

}













/*
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
*/
