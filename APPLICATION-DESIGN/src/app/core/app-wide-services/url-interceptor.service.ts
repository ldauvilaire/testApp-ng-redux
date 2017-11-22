import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
/*
import { API_ROOT_URL } from './../../../app.module';
@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  constructor(@Inject(API_ROOT_URL) private apiUrl: string) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({url: this.prepareUrl(req.url)});
    return next.handle(req);
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }

  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : this.apiUrl + '/' + url;
    return url.replace(/([^:]\/)\/+/g, '$1');
  }
}*/
