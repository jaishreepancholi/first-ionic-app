import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  names: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   if(navParams.get("name")  && navParams.get("pass")) {
    debugger;
     this.names =  navParams.get("name");
     this.password = navParams.get("pass");
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
