import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskModalComponent } from '../../core/components/add-task-modal/add-task-modal.component';
import { AddOpportunityModalComponent } from '../../core/components/add-opportunity-modal/add-opportunity-modal.component';
import { ShowTaskModalComponent } from '../../core/components/show-task-modal/show-task-modal.component';
import { LoadingState } from '../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { LeadsService } from '../../core/services/leads.service'
import { forkJoin } from 'rxjs';
import * as Globals from '../../core/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  loading: LoadingState = LoadingState.NotReady;
  loggedInUser = localStorage.getItem('userid')
  leadList = []
  sourceList = []
  defaultPagination: number;
  totalLeadList: number;
  itemNo: number;
  lower_count: number;
  upper_count: number;
  paginationMaxSize: number;
  itemPerPage: number;
  pageSize: number;
  headerThOption = [];
  sort_by = '';
  search_key = ''
  statusList = []
  filterByDays = ''
  status=[];
  isAllStatus:string = '';
  source=[];
  isAllSource:string = '';

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private leadsService: LeadsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itemNo = 0;
    this.defaultPagination = 1;
    this.paginationMaxSize = Globals.paginationMaxSize;
    this.itemPerPage = Globals.itemPerPage;
    this.pageSize = Globals.pageSize;
    this.statusList = Globals.choiceFileds.leadStatus
    
    this.headerThOption = [
      {
        id: 1,
        name: "Business Name",
        code: "business_name",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
      {
        id: 2,
        name: "First Name	",
        code: "poc__first_name",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
      {
        id: 3,
        name: "Last Name",
        code: "poc__last_name",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
      {
        id: 4,
        name: "Country",
        code: "poc__country__name",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
      {
        id: 5,
        name: "Contact No",
        code: "poc__phone",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
      {
        id: 6,
        name: "Email Id",
        code: "poc__email",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
      {
        id: 7,
        name: "Source",
        code: "source",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
      {
        id: 8,
        name: "status",
        code: "Status",
        sort_type: '',
        has_tooltip: false,
        tooltip_msg: '',
      },
    ]
    // this.getSourceList();
    this.getLeadList()
  }

  getLeadList() {
    this.loading = LoadingState.Ready;
  }

 

  addTask(){

    let dialogRef = this.dialog.open(AddTaskModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px',
      data: {id:1}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != false && result != undefined){
        this.leadList[1].task.push(result)
      }
    })

  }

  addOpportunity(){
    let dialogRef = this.dialog.open(AddOpportunityModalComponent, {
      width: '625px',
      data: {id: 1}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  showTask(){
    let dialogRef = this.dialog.open(ShowTaskModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '380px',
      data: []
    });
    dialogRef.afterClosed().subscribe(result => {

      if(result == true){
        this.getLeadList()
      }
    })
  }

  flushList(e){

  }

  searchEvent(e){

  }

  filterLead(event){
    this.filterByDays = event
    this.dataFilter()
  }

  status_by(event,index:number){
    if(event.target.checked == true){
      this.statusList[index].isChecked = "checked"
    }else{
      this.isAllStatus = ''
      delete this.statusList[index].isChecked
    }
    
    var data = []
    this.statusList.forEach((x)=>{
      if(x.isChecked == "checked"){
        data.push(x.id)
      }
    })
    
    let checkedStatus = this.statusList.filter(x => x.isChecked == 'checked');
    if(checkedStatus.length == this.statusList.length){
      this.isAllStatus = 'checked'
    }else{
      this.isAllStatus = ''
    }

    this.status = data;
    this.dataFilter();

  }

  status_by_all(event){
    var data = []
    if(event.target.checked == true){
      this.isAllStatus = 'checked'
      this.statusList.forEach((x)=>{
        x.isChecked = "checked"
        data.push(x.id)
      })
      
    }else{
      this.isAllStatus = ''
      this.statusList.forEach((x)=>{
        delete x.isChecked
      })
    }

    this.status = data;
    this.dataFilter();
   }

   source_by(event,index:number){
    if(event.target.checked == true){
      this.sourceList[index].isChecked = "checked"
    }else{
      this.isAllSource = ''
      delete this.sourceList[index].isChecked
    }
    
    var data = []
    this.sourceList.forEach((x)=>{
      if(x.isChecked == "checked"){
        data.push(x.id)
      }
    })
    
    let checkedSource = this.sourceList.filter(x => x.isChecked == 'checked');
    if(checkedSource.length == this.sourceList.length){
      this.isAllSource = 'checked'
    }else{
      this.isAllSource = ''
    }

    this.source = data;
    this.dataFilter();

  }

  source_by_all(event){
    var data = []
    if(event.target.checked == true){
      this.isAllSource = 'checked'
      this.sourceList.forEach((x)=>{
        x.isChecked = "checked"
        data.push(x.id)
      })
      
    }else{
      this.isAllSource = ''
      this.sourceList.forEach((x)=>{
        delete x.isChecked
      })
    }

    this.source = data;
    this.dataFilter();
   }
  
  pagination() {
    this.loading = LoadingState.Processing;
    this.getLeadList();
  }

  sortTable(value)
  {
    let type = '';
    this.headerThOption.forEach(function (optionValue) {
      if(optionValue.code == value)
      {
        if(optionValue.sort_type =='desc')
        {
          type = 'asc';
        }
        else
        {
          type = 'desc';
        }
        optionValue.sort_type = type;
      }
      else{
        optionValue.sort_type = '';
      }
    });

    this.sort_by = value;
    let sort_type = type;

    if(sort_type == 'desc'){
      this.sort_by = '-' + this.sort_by
    }

    this.defaultPagination = 1;
    this.getLeadList();
  };

  dataFilter() {
    this.loading = LoadingState.Processing;
    this.defaultPagination = 1;
    this.pageSize = this.itemPerPage;
    this.getLeadList();
  }

  onListCountSelectionChange(item): void {    
    this.itemPerPage = item;
    this.defaultPagination = 1;
    this.pageSize = this.itemPerPage;
    this.getLeadList();
  }

  openSettings(){
    this.router.navigateByUrl('/settings');
  }
}
