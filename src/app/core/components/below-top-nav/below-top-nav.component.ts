import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddLeadComponent } from '../add-lead/add-lead.component';

@Component({
  selector: 'app-below-top-nav',
  templateUrl: './below-top-nav.component.html',
  styleUrls: ['./below-top-nav.component.scss']
})
export class BelowTopNavComponent implements OnInit {

  @Output() public emitLead = new EventEmitter<any>();
  @Output() public emitSearch = new EventEmitter<any>();
  @Output() public emitFilterData = new EventEmitter<any>();
  origin = 'indian';
  search_key = ''
  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }

  radioChange(e){

  }

  addLead(){
    let dialogRef = this.dialog.open(AddLeadComponent, {
      width: '525px',
    });
    dialogRef.afterClosed().subscribe(result => {
      
      if(result == true){
        this.emitLead.emit(result)
      }
    })
  }

  submit(){
    this.emitSearch.emit(this.search_key)
  }

  filterLead(event){
    this.emitFilterData.emit(event)
  }
}
