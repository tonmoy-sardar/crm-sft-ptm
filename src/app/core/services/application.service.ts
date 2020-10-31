import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  httpHeaderOptions: any;

  constructor(public _http: HttpClient) {
    this.httpHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
  }

  applicationList() {
    return this._http.get(environment.apiEndpoint + 'add_application/', this.httpHeaderOptions);
  }
}
