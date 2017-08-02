import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the MystocksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mystocks',
  templateUrl: 'mystocks.html',
})
export class MystocksPage {

      myStockArray: any[];

      allStockArray: any[];

      constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.myStockArray = [
            { ticker: "AAPL", name: "Apple Inc.", subscribe: false },
            { ticker: "WMT", name: "Wal-Mart Stores Inc.", subscribe: false },
            { ticker: "V", name: "Visa Inc.", subscribe: false },
            { ticker: "UNH", name: "UnitedHealth Group Incorporated", subscribe: false },
            { ticker: "PG", name: "Procter & Gamble Company", subscribe: false },
            { ticker: "KO", name: "Coca-Cola Company", subscribe: false },
            { ticker: "GS", name: "Goldman Sachs Group Inc.", subscribe: false },
            { ticker: "MRK", name: "Merck & Company Inc.", subscribe: false },
            { ticker: "VZ", name: "Verizon Communications Inc.", subscribe: false },
            { ticker: "UTX", name: "United Technologies Corporation", subscribe: false },
            { ticker: "TRV", name: "The Travelers Companies Inc.", subscribe: false },
            { ticker: "DIS", name: "Walt Disney Company", subscribe: false },
            { ticker: "HD", name: "Home Depot Inc.", subscribe: false },
            { ticker: "DD", name: "E.I. du Pont de Nemours and Company", subscribe: false },
            { ticker: "MMM", name: "3M Company", subscribe: false },
            { ticker: "PFE", name: "Pfizer Inc.", subscribe: false },
            { ticker: "NKE", name: "Nike Inc.", subscribe: false },
            { ticker: "MCD", name: "McDonald's Corporation", subscribe: false },
            { ticker: "JPM", name: "JP Morgan Chase & Co.", subscribe: false },
            { ticker: "INTC", name: "Intel Corporation", subscribe: false },
            { ticker: "GE", name: "General Electric Company", subscribe: false },
            { ticker: "CSCO", name: "Cisco Systems Inc.", subscribe: false },
            { ticker: "CVX", name: "Chevron Corporation", subscribe: false },
            { ticker: "AXP", name: "American Express Company", subscribe: false },
            { ticker: "BA", name: "Boeing Company", subscribe: false }
        ];

            //this.myStockArray = [];
            //this.myStockArray.push({ ticker: "AAPL" });
      }

      itemSelected(item){
        this.navCtrl.push(DetailPage,{
          item: item
        });
      }

      ionViewDidLoad() {
        console.log('ionViewDidLoad MystocksPage');
      }

}
