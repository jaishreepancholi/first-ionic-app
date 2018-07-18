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

  constructor(public navCtrl: NavController, public fb : FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      username: '',
      password: ''
    });
  }
  
  
  
  onsubmit(value) {
    this.navCtrl.push(ListPage, {name: value.username, pass: value.password});
  }

}
