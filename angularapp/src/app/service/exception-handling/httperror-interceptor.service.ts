import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttperrorInterceptorService implements HttpInterceptor{

  constructor(private toastr: ToastrService,private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
    
    console.log('HTTP Request started');
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    
                    if(error.status==0)
                    {
                        this.router.navigate(['/error']);
                    } 
                    else if(error.status==500) 
                    {
                        this.toastr.error('Internal Server Error!!!\nTry again later', error.statusText);
                    }
                    else if(error.status==401) 
                    {
                        this.toastr.error('Unauthorized!!!\nTry again later', error.statusText);
                    }
                    else if(error.status==404) 
                    {
                        this.toastr.error('Page Not Found!!!\nTry again later', error.statusText);
                    }
                    
                    console.log(error);
                    
                    return throwError(error);
                })
            );
  }
}
