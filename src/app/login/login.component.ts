import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  constructor(
    private _router: Router,
    private _snackSvc: MatSnackBar
  ) { }

  Email: string = "";
  Password: string = "";

  public OnClickLogin()
  {
    if (!this.Email.length || !this.Password.length)
    {
      this._snackSvc.open("Please enter an email and password, Queen!", "Got It!!")
    }
    else
    {
      this._router.navigate(["deals"])

    }
  }
}
