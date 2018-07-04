import { Component,OnInit } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detailpage',
  templateUrl: 'detailpage.html',
})
export class Detailpage implements OnInit{

  message:String;
  ngOnInit(): void {
    this.message= this.navParams.get('message');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
