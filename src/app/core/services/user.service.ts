import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private subject = new Subject<any>();
  httpHeaderOptions: any;  

  constructor(private http: HttpClient) {

    this.httpHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
  }

  addUser(str: any) {
    return this.http.post(environment.apiEndpoint + 'add_user/', str, this.httpHeaderOptions);
  }

  getUsers() {
    return this.http.get(environment.apiEndpoint + 'user-module-role_list/', this.httpHeaderOptions);
  }

  userList(page, str, field, order) {
    return this.http.get(environment.apiEndpoint + 'user_module_list/?page=' + page + '&search=' + str + '&field_name=' + field + '&order_by=' + order, this.httpHeaderOptions);
  }

  getfreeroles(appid: any) {
    return this.http.get(environment.apiEndpoint + 'free_role-module_list/' + appid + '/', this.httpHeaderOptions);
  }

  logout() {
    return this.http.get(environment.apiEndpoint + 'logout/', this.httpHeaderOptions);
  }

  lockunlock(str) {
    return this.http.put(environment.apiEndpoint + 'user_lock_unlock/' + str.id + '/', str, this.httpHeaderOptions);
  }

  changepass(str) {
    return this.http.put(environment.apiEndpoint + 'change_password/', str, this.httpHeaderOptions);
  }

  getUserDetails() {
    return this.http.get(environment.apiEndpoint + 'user_edit/' + localStorage.getItem('userid') + '/', this.httpHeaderOptions);
  }

  userDetails(uid) {
    return this.http.get(environment.apiEndpoint + 'user_edit/' + uid + '/', this.httpHeaderOptions);
  }

  otherProfileUpdate(uid, str) {
    return this.http.put(environment.apiEndpoint + 'user_edit/' + uid + '/', str, this.httpHeaderOptions);
  }

  updateUser(str) {
    return this.http.put(environment.apiEndpoint + 'user_edit/' + localStorage.getItem('userid') + '/', str, this.httpHeaderOptions);
  }

  sendSwitchUser(id: number) {
    this.subject.next(id);
  }

  getSwitchUser(): Observable<any>{
    return this.subject.asObservable();
  }
}
