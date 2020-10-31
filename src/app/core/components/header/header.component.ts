import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ApplicationService } from '../../services/application.service';
import { NotificationService } from '../../services/notification.service';
import * as Globals from '../../../core/globals';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedin: Boolean;
  is_superuser: any;
  apps: any = [];
  applicationList: any = [];
  name: string = '';
  email: string = '';
  image: string = null;
  applist: any;
  message: any;
  notificationList = []

  constructor(
    private router: Router,
    private userService: UserService,
    private applicationService: ApplicationService,
    private notificationService: NotificationService,
    private toastr: ToastrService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loggedin = (localStorage.getItem('isLoggedin') ? true : false);
    this.is_superuser = (localStorage.getItem('is_superuser') == "true" ? true : false);
    if (this.loggedin) {
      this.name = localStorage.getItem('name');
      this.email = localStorage.getItem('email');
      this.image = localStorage.getItem('image');
      // this.fetchApps();
      // this.getNotificationListing()
      // this.notificationService.requestPermission(localStorage.getItem('userid'))
      // this.receiveMessage()
      // this.message = this.notificationService.currentMessage
    }

  }

  receiveMessage(){
    navigator.serviceWorker.addEventListener("message",(event) => {
      console.log(event)
      //notification received from firebase, now call list
      this.getNotificationListing()
    } )
  }

  getNotificationListing(){
    this.notificationService.getNotificationListing().subscribe(
      response => {
        this.notificationList = response['result']
      },
      error => {
        this.toastr.error('Error in realtime notification receive', '', {
          timeOut: 3000,
        });
      }
    );
  }

  viewNotification(object,index){
    var type = object.notification.data.type
    var taskId = object.notification.data.id
    var notificationId = object.notification.id

    //read notification
    this.notificationService.readNotification(notificationId).subscribe(
      response => {
        this.notificationList.splice(index, 1);
        //OPEN POPUP
          // if(type == 'task'){
          //   this.viewTask(taskId)
          // }
        
      },
      error => {
        this.toastr.error('Error in read notification', '', {
          timeOut: 3000,
        });
      }
    )

  }

  viewTask(id) {
    
  }

  goToSsil() {
    window.open(Globals.baseUrl, "_self");
  }


  fetchApps() {
    this.applicationList = [];
    if (this.is_superuser == true || this.is_superuser == "true") {
      this.applicationService.applicationList().subscribe(
        response => {
          this.apps = response;
          this.apps.forEach(element => {
            this.applicationList.push({
              'module': element,
              'permissions': {
                'cp_g': 7,
                'cp_o': 7,
                'cp_u': 7
              }
            });
          });
          // console.log(this.applicationList)
        },
        error => {
          // console.log(error)
        }
      );
    } else {
      this.applist = JSON.parse(localStorage.getItem("module_access"));
      //console.log("sadadsadasd",this.applist)
      this.applist.forEach(element => {
        this.applicationList.push({
          'module': element.module,
          'permissions': element.permissions
        });
      });
    }
  }

  goLanding() {
    window.open(Globals.baseUrl + "/#/landing", "_self");
    // window.location.href = "http://166.62.54.122/ssilmanagement/#/landing";
    // this.router.navigate(['/landing'])
  }

  goAdmin() {
    window.open(Globals.baseUrl + "/#/admin", "_self");
    // window.location.href = "http://166.62.54.122/ssilmanagement/#/admin";
    // this.router.navigate(['/admin'])
  }

  goprofile() {
    window.open(Globals.baseUrl + "/#/account", "_self");
    // window.location.href = "http://166.62.54.122/ssilmanagement/#/account";
    // this.router.navigate(['/account'])
  }

  gopass() {
    window.open(Globals.baseUrl + "/#/account/changepassword", "_self");
    // window.location.href = "http://166.62.54.122/ssilmanagement/#/account/changepassword";
    // this.router.navigate(['/account/changepassword'])
  }

  goSpecialPage(moduledet) {
    var userStr = localStorage.getItem('loggedUserName');
    var userNewStr = btoa(userStr);
    if (moduledet.cm_url == 'tms') {
      var url = "http://13.232.240.233:8001/login/" + userNewStr;
      window.open(url, "_self");
    }
  }

  goPage(url,id) {
    localStorage.setItem("currentModuleId", id)
    if (url == 'pms') {
      window.open(Globals.baseUrl + url, "_self");
    }
    else if (url == 'vms') {
      window.open(Globals.baseUrl + url, "_self");
    }
    else if (url == "hrms") {
      window.open(Globals.baseUrl + url, "_self");
    }
    else if (url == "etask") {
      window.open(Globals.baseUrl + url, "_self");
    }
    else if (url == "eticket") {
      window.open(Globals.baseUrl + url, "_self");
    }
    else {
      window.open(url, "_self");
    }

  }

  logout() {
    this.userService.logout().subscribe(
      response => {
        localStorage.clear();
        this.loggedin = false;
        window.open(Globals.baseUrl, "_self");
        // this.router.navigate(['/home'])
      },
      error => {
        console.log(error)
        localStorage.clear();
        this.loggedin = false;
        window.open(Globals.baseUrl, "_self");
        // this.router.navigate(['/home'])
      }
    );
  }

}