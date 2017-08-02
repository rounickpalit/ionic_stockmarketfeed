import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Chart } from 'angular-highcharts';
import { StockServiceProvider } from '../../providers/stock-service/stock-service';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */




@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item: any;
  stockInfo = [];

  chartOptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private stockService: StockServiceProvider) {

      this.item = navParams.get('item');

      this.getStock(this.item);

      this.chartOptions = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
      };

  }

  getStock(stock) {
    this.stockService.getStock(stock.ticker).subscribe(data => this.stockInfo = data.dataset); //this.stockInfo = data.dataset   console.log(data)
    //console.log(this.stockInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
