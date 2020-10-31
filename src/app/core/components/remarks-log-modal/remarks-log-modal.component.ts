import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingState } from '../../../core/components/loading/loading.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-remarks-log-modal',
  templateUrl: './remarks-log-modal.component.html',
  styleUrls: ['./remarks-log-modal.component.scss']
})
export class RemarksLogModalComponent implements OnInit {

  loading: LoadingState = LoadingState.NotReady;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<RemarksLogModalComponent>    
  ) { }

  ngOnInit() {
    this.data = [
      {name: 'Soumya Bhattacharya', created_at: '2020-10-28T10:15:10', comment: 'Lorem Ipsum is a dummy text'},
      {name: 'Soumya Bhattacharya', created_at: '2020-10-28T10:15:10', comment: 'Lorem Ipsum is a dummy text'},
      {name: 'Soumya Bhattacharya', created_at: '2020-10-28T10:15:10', comment: 'Lorem Ipsum is a dummy text'},
      {name: 'Soumya Bhattacharya', created_at: '2020-10-28T10:15:10', comment: 'Lorem Ipsum is a dummy text'},
    ];
    this.loading = LoadingState.Ready;
  }

  getLetter(author){
    var x = author.split(' ');
    if(x.length > 1){
      return x[0].charAt(0) + x[1].charAt(0)
    }
    else{
      return x[0].charAt(0)
    }
    
  }

  close(flag){
    this.dialogRef.close(flag);
  }

}
