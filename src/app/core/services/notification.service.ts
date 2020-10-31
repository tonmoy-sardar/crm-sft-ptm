import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  httpHeaderOptions: any;
  currentMessage = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    
  }

  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens/').update(data)
      })
  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
         //save token
         var postData = {"device_token": token, "device_type": "web"}
         this.http.post(environment.apiEndpoint + 'add_device_token/', postData, this.httpHeaderOptions).subscribe(
           (res) => {
            this.updateToken(userId, token);
           }
         );
        
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  // receiveMessage() {
  //   this.angularFireMessaging.messages.subscribe(
  //     (payload) => {
  //       console.log("new message received. ", payload);
  //       this.currentMessage.next(payload);
  //     })
  // }

  /**
   * Get notification
   */
  getNotificationListing() {
    return this.http.get(environment.apiEndpoint + 'notification/list/etask/', this.httpHeaderOptions);
  }

  readNotification(id:number) {
    return this.http.put(environment.apiEndpoint + 'read_notification/'+id+'/',{}, this.httpHeaderOptions);
  }
}
