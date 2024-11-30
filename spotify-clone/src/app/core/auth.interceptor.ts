import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AuthIntercptor implements HttpInterceptor {

  constructor(
    private authService : AuthenticationService
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    console.log("inside")
    if (!this.authService.accessToken) {
      return next.handle(req); // Pass the request as is
    }

    if (accessToken) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return next.handle(clonedRequest); // Send the cloned request
    }

    // If no access token, forward the original request
    return next.handle(req);
  }

}
