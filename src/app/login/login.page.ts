import { Component, OnInit } from '@angular/core';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private faio: FingerprintAIO, private router: Router) { }

  showAuth() {
    this.faio.show({
      disableBackup: true,
    })
        .then((result: any) => {
          console.log(result);
          this.router.navigateByUrl('home');
        })
        .catch((error: any) => console.log(error));

  }

  ngOnInit() {
  }

}
