import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest'
import { ViewPage } from '../view/view';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  names: any;
  password: any;
  dataObject: any;
  retrievedObject: any;
  returnData: any;
  idemp: any;
  loginDetailArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) {

  }
  ionViewDidLoad() {
    if (this.navParams.get("name") && this.navParams.get("pass")) {
      this.names = this.navParams.get("name");
      this.password = this.navParams.get("pass");

    }
    this.productList();
  }
  redirect() {
    // this.navCtrl.push(HomePage);
  }
  productList() {
    this.idemp = this.rest.getProduct().subscribe(productsData => {
      this.returnData = productsData;
    });
  }
  items(item: string) {
    this.navCtrl.push(ViewPage, { viewItems: item });
  }
}
