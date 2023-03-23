import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(environment.tt_token);
    request = request.clone({
      setHeaders: {
        Authorization: `${ token }`
      }
    });
    return next.handle(request);
    // return next.handle(request).pipe(
    //   tap(
    //     (event) => {
    //       if (event instanceof HttpResponse)
    //         console.log('Server response')
    //     },
    //     (err) => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status == 401)
    //           console.log('Unauthorized')
    //       }
    //     }
    //   )
    // )
  }
}
