import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { tap, finalize  } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SpinnerService } from "./shared/spinner/spinner.service";

@Injectable()

export class Interceptor {
  countRequest: number = 0;
  constructor(private spinnerService: SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    if (req.url.indexOf('token') == -1) {
      const authRequest = req.clone({
        setHeaders: {
          'Authorization': `Bearer 63a798e53c8a5f02c11d1f9f44f81a6d17edfbfaf088ad57d1fa324ca8a5a4bd`
        }
      });
      this.countRequest++;
      return next.handle(authRequest).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //
        }
      },
        (err: any) => {
        }),
        finalize(() => {
          this.countRequest--;
          if (this.countRequest <=  0) {
            this.spinnerService.hide();
          }
        }));
    }
    else {
      return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //
        }
      },
        (err: any) => {
        }),
        finalize(() => {
          this.countRequest--;
          if (this.countRequest <= 0) {
            this.spinnerService.hide();
          }
        }));
    }
  }
}
