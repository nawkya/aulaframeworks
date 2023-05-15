import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isError = false;
  isSucess = false;

  user = ""
  pwd = ""




  login() {

    console.log("User = " + this.user + " Password = " + this.pwd)
    if (
      this.user == "ana.com" && this.pwd == "naju"
    ) {
      console.log("login aprovado!")
      this.isError = false;
      this.isSucess = true;
    }

    else {
      this.isError = true;
      this.isSucess = false;
    }
  }

}
