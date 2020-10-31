import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-opportunity-details-modal',
  templateUrl: './opportunity-details-modal.component.html',
  styleUrls: ['./opportunity-details-modal.component.scss']
})
export class OpportunityDetailsModalComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<OpportunityDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit() {
    
  }

  close(key: boolean) {
    this.dialogRef.close(key);
  }
}
