import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log("hola")
    const options = {
      method: 'post',
      data: { id: 12, message: 'test' },
      headers: { Authorization: 'OAuth2: token' }
    };

    cordova.plugin.http.sendRequest('https://google.com/', options, function (response) {
      // prints 200
      console.log(response.status);
    }, function (response) {
      // prints 403
      console.log(response.status);

      //prints Permission denied
      console.log(response.error);
    });
  }

}
