import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../../../core/services/setting.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { AddComponent } from './add/add.component';
import * as Globals from '../../../core/globals';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  defaultPagination: number;
  itemNo: number;
  lower_count: number;
  upper_count: number;
  paginationMaxSize: number;
  itemPerPage: number;
  itemPerPageNumList: any = [];
  pageSize: number;
  totalDomain: number;
  domainList: any = [];  
  public loading: LoadingState = LoadingState.NotReady;
  dialogRef: MatDialogRef<ConfirmDialogComponent>;

  constructor(
    private router: Router,
    private settingsService: SettingService,
    private toastr: ToastrService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.itemNo = 0;
    this.defaultPagination = 1;
    this.paginationMaxSize = Globals.paginationMaxSize;	   
    this.itemPerPage = Globals.itemPerPage;	
    this.pageSize = Globals.pageSize;
    this.getDomains();
  }

  openSettings(){
    this.router.navigateByUrl('/settings');
  }

  getDomains(){
    this.loading = LoadingState.Processing;
    let param: URLSearchParams = new URLSearchParams();
    param.set('page', this.defaultPagination.toString());
    if (this.itemPerPage) 
      param.set('page_size', this.itemPerPage.toString()); 
    this.settingsService.getDomains(param).subscribe(
      res=>{ 
        this.domainList = res['results'];  
        this.totalDomain = res['count'];
        this.itemNo = (this.defaultPagination - 1) * this.itemPerPage;
        this.lower_count = this.itemNo + 1;
        if (this.totalDomain > this.itemPerPage * this.defaultPagination) {
          this.upper_count = this.itemPerPage * this.defaultPagination
        } else {
          this.upper_count = this.totalDomain
        }     
        this.loading = LoadingState.Ready;        
      },
      error => {
        this.loading = LoadingState.Ready;
        this.toastr.error('Something went wrong', '', {
          timeOut: 3000,
        });
      }
    )    
  }

  pagination() {
    this.loading = LoadingState.Processing;   
    // this.settingsConfig.defaultPagination = this.defaultPagination;   
    this.getDomains();
  }

  onListCountSelectionChange(item): void {
    this.itemPerPage = item;    
    this.pageSize = this.itemPerPage;  
    this.defaultPagination = 1;  
    // this.settingsConfig.itemPerPage = +item; 
    // this.settingsConfig.pageSize = this.pageSize;    
    // this.settingsConfig.defaultPagination = this.defaultPagination; 
    this.getDomains();
  }

  addDomain(){   
    let dialogRef = this.dialog.open(AddComponent, {
      width: '525px',
      data: {title:'Add Domain', from: 'add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getDomains()
      }
    })
  }

  editDomain(data){   
    let dialogRef = this.dialog.open(AddComponent, {
      width: '525px',
      data: {title:'Edit Domain', from: 'edit', details: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getDomains()
      }
    })
  }

  deleteDomain(id:number,index:number){
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
    });

    this.dialogRef.componentInstance.confirmMessage = "Are you sure for this action ?"
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = LoadingState.Processing;
        this.settingsService.deleteDomain(id).subscribe(
          res=>{
              this.domainList.splice(index,1)
              this.loading = LoadingState.Ready;
          },
          error =>{
            this.loading = LoadingState.Ready;
            this.toastr.error('Something went wrong', '', {
              timeOut: 3000,
              });
            }
        )       
      }
      this.dialogRef = null;
    })
  }
}
