import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  viewItem: any;
  cakeName: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get("viewItems")) {
      this.viewItem = this.navParams.get("viewItems");
      this.cakeName = this.viewItem.name;
    }
  }

  ionViewDidLoad() {

  }

}
