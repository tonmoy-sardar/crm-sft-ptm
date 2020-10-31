import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../services/setting.service';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  //loading: LoadingState = LoadingState.NotReady; 
   isSidebar: boolean;
  navItems: any = [];
  @Input() isOpen: boolean;
  employeeVisible: number = 0;
  settingsVisible: number = 0;
  teamRequired:boolean;
  constructor(
    private router: Router,
    private settingService: SettingService,
    private userService: UserService
  ) { }

  ngOnInit() {
  
    this.isSidebar = true;
    this.settingService.storage = {'isSidebar':this.isSidebar}
    this.loadSwitchedUser()
  }

  loadSwitchedUser(){
    this.userService.getSwitchUser().subscribe(x => {   
      if(x){
       this.setUser() //if team is selected to login 
      }else{
        this.createNav()
      }
      
    });
   
  }

  setUser(){
    //if team is selected to login , re-generate menu
    this.navItems = [
      {
        name: 'Dashboard',
        link: 'dashboard',
        icon: 'fa fa-tachometer',
        isSubMenu: false,
        havePermission: 1,
        teamRequired:false
      }, 
      {
        name: 'Transfer Tasks',
        link: 'transfer-tasks',
        icon: 'fa fa-exchange',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Transfer Tasks', ''),
        teamRequired:this.teamRequired
      },
      {
        name: 'Transfer Ownership',
        link: 'transfer-ownership',
        icon: 'fa fa-exchange',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Transfer Ownership', ''),
        teamRequired:this.teamRequired
      },
      {
        name: 'Default Reporting Dates',
        link: 'default-reporting-dates',
        icon: 'fa fa-flag',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('General Reporting Dates', ''),
        teamRequired:this.teamRequired
      },
      {
        name: 'Task Report',
        link: 'tasks-report',
        icon: 'fa fa-list',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Task Report', ''),
        teamRequired:this.teamRequired
      },
      
    ]
  }

  createNav(){
    this.navItems = [
      {
        name: 'Dashboard',
        link: 'dashboard',
        icon: 'fa fa-tachometer',
        isSubMenu: false,
        havePermission: 1,
        teamRequired:false
      },      
      {
        name: 'Create New Task',
        link: 'task/create',
        icon: 'fa fa-tasks',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Create New Task', ''),
        teamRequired:false
      },
      {
        name: 'Add Follow Up',
        link: 'follow-up/add',
        icon: 'fa fa-tty',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Add Follow Up', ''),
        teamRequired:false
      },
      {
        name: 'Add New Appointment',
        link: 'appointment/add',
        icon: 'fa fa-handshake-o',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Add New Appointment', ''),
        teamRequired:false
      },
      {
        name: 'Transfer Tasks',
        link: 'transfer-tasks',
        icon: 'fa fa-exchange',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Transfer Tasks', ''),
        teamRequired:this.teamRequired
      },
      {
        name: 'Transfer Ownership',
        link: 'transfer-ownership',
        icon: 'fa fa-exchange',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Transfer Ownership', ''),
        teamRequired:this.teamRequired
      },
      {
        name: 'Default Reporting Dates',
        link: 'default-reporting-dates',
        icon: 'fa fa-flag',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('General Reporting Dates', ''),
        teamRequired:this.teamRequired
      },
      {
        name: 'Task Report',
        link: 'tasks-report',
        icon: 'fa fa-list',
        isSubMenu: false,
        havePermission: this.settingService.havePermission('Task Report', ''),
        teamRequired:this.teamRequired
      },
      
    ]

  }

  sideBarToggle() {
    this.isSidebar = !this.isSidebar;
    this.settingService.storage = {'isSidebar':this.isSidebar}
  }

  menuTap(item) {
    if (item.isSubMenu) {
      item['isOpen'] = !item['isOpen'];
    }
    else {
      //this.router.navigateByUrl('/' + item.link);
    }

  }

}
