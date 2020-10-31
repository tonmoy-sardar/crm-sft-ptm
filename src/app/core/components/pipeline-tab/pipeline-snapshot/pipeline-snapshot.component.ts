import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RemarksLogModalComponent } from '../../../../core/components/remarks-log-modal/remarks-log-modal.component';

@Component({
  selector: 'app-pipeline-snapshot',
  templateUrl: './pipeline-snapshot.component.html',
  styleUrls: ['./pipeline-snapshot.component.scss']
})
export class PipelineSnapshotComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  viewRemarks() {
    let dialogRef = this.dialog.open(RemarksLogModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  editModal(){

  }
  
}
