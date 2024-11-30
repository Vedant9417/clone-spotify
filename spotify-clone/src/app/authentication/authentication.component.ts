import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnInit {

  public user = {
    userName: 'c5357566017e4c719111f3bd42d0200c',
    password: 'e4ab77f150484b29a773c9787d907978'
  }

  constructor(
    private auth :AuthenticationService
  ){}

  ngOnInit(): void {
    console.log("Inside Login")
   
  }

  onSubmit(){
    this.auth.login(this.user)
  }
}
