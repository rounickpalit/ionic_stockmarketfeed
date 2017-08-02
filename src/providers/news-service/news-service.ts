import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the NewsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NewsServiceProvider {

  //private url: string = "http://www.moneycontrol.com/rss/MCtopnews.xml";
  private url: string = "https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=";

  constructor(private http: Http) {
    console.log('Hello NewsServiceProvider Provider');
  }

  getNewsFeeds(apiKey) {
    return this.http.get(this.url + apiKey)
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
