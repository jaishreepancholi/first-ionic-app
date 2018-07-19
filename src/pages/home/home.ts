import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heroForm: FormGroup;
  showForm: boolean = false;
  dataArray: Array<any> = [];
  dataObject: object = {
    "username": '',
    "password": ''
  }
  constructor(public navCtrl: NavController, public fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      username: '',
      password: ''
    });
  }



  onsubmit(value) {
 
    this.dataObject = {
      "username": value.username,
      "password": value.password
    }
    this.dataArray.push(this.dataObject);
    
    this.showForm = false;

    // this.navCtrl.push(ListPage, { name: value.username, pass: value.password });
  }
  addUser() {
    this.showForm = true;
  }
  removeUser(index) {
   this.dataArray.splice(index, 1);

  }
  updateUser(data, index){
    debugger;
    this.showForm = true;
    // this.heroForm.get('username').setValue(data.username);
    // this.heroForm.get('password').setValue(data.password);
    
  }

}
