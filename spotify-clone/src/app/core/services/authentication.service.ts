import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public url = 'https://accounts.spotify.com/api/token'
  public accessToken : string = ''

  constructor(
    private http: HttpClient,
    private cookies: CookieService 
  ) { }

  login(user :any) {
    const headers = new HttpHeaders( {
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    const data = new URLSearchParams ({
      grant_type: "client_credentials",
      client_id: user.userName,
      client_secret: user.password,
    }).toString();

    this.http.post<any>(this.url, data.toString(), { headers }).subscribe({
      next: (data) => {
        console.log(data)
        this.setAccessToken(data.access_token)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setAccessToken(token:string){
    this.accessToken = token
  }

  getAccessToken(){
    return this.accessToken
  }
}


