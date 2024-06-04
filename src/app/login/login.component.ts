import { Component } from '@angular/core';
import { LoginService } from '../services/signin.service';

@Component({
  selector: 'fet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  client = {
    user: '',
    pwd: ''
  } 

  constructor( private loginService : LoginService ){}

  login(){
    this.loginService.signIn(this.client).subscribe({
      next: (data) => {console.log(data)}
    })
    this.client.user = ''
    this.client.pwd = ''
  }

}
