import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

items: any[];

  constructor(public navCtrl: NavController) {
    console.log("HomePage");
        this.items=[];
        for(let i=0;i<10;i++){
          this.items.push({
            text: 'Item '+ i,
            id: i
          });
        }

  }

    itemSelected(item){
        //alert(item.text);
        this.navCtrl.push(DetailPage,{
        item: item
        });
    }

}
