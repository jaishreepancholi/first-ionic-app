import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heroForm: FormGroup;
  showForm: boolean = false;
  dataArray: Array<any> = [];
  listData: any;
  postData: any;
  dataObject: object = {
    "username": '',
    "password": ''
  }
  constructor(public navCtrl: NavController, public fb: FormBuilder, public rest: RestProvider) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onsubmit(value) {
    debugger;
    this.dataObject = {
      "username": value.username,
      "password": value.password
    }
    this.dataArray.push(this.dataObject);
    this.showForm = false;
    // this.rest.getProduct();
    this.postProductList(value);
    // this.navCtrl.push(ListPage, { name: value.username, pass: value.password });
  }

  postProductList(value) {
    this.listData = this.rest.createProduct(value).subscribe(postDataValue => {
      this.postData = postDataValue;
      if(this.postData.token) {
        this.navCtrl.push(ListPage, { name: this.postData.username, pass: this.postData.password });
      }
    });
  }
  // addUser() {
  //   this.showForm = true;
  // }
  // removeUser(index) {
  //  this.dataArray.splice(index, 1);

  // }
  // updateUser(data, index){
  //   this.showForm = true;
  //   // this.heroForm.get('username').setValue(data.username);
  //   // this.heroForm.get('password').setValue(data.password);

  // }

}
