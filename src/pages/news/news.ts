import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsServiceProvider } from '../../providers/news-service/news-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { InAppBrowser } from 'cordova-plugin-inappbrowser/types';
/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  newsFeeds = [];
  apiKey: string = "1e0e15dfb2594d208ddf2e7ead1da2bd";

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsServiceProvider, private iab: InAppBrowser) {
      this.getNews(this.apiKey);
  }

  getNews(api) {
      this.newsService.getNewsFeeds(api).subscribe(data => this.newsFeeds = data.articles);
  }

  openLink(url) {
      console.log("inside openLine method and url is "+url);
      this.iab.create(url,"_system","location=yes");
      //cordova.inappbrowser.openLink(url,"_system","location=yes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
