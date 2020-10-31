import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPocModalComponent } from '../../../core/components/add-poc-modal/add-poc-modal.component';
import { ViewPoclistModalComponent } from '../../../core/components/view-poclist-modal/view-poclist-modal.component';
import { Router } from '@angular/router';
import { OpportunityCardModalComponent } from '../../../core/components/opportunity-card-modal/opportunity-card-modal.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dialogRef1: MatDialogRef<OpportunityCardModalComponent>;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getConfigData(data){
    // this.headerThOption = data
  }

  openSettings(){
    this.router.navigateByUrl('/settings');
  }

  addPOC() {
    let dialogRef = this.dialog.open(AddPocModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '610px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  viewPOCs() {
    let dialogRef = this.dialog.open(ViewPoclistModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  viewOpportunity(id) {
    this.router.navigateByUrl('/accounts/opportunity/' +id);
  }

  viewOpportunityCard(id){
    this.dialogRef1 = this.dialog.open(OpportunityCardModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '500px',
      data: {title: id}
    });
    this.dialogRef1.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }


}
