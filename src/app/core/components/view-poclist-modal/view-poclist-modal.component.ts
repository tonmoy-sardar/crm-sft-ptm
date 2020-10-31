import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingState } from '../../../core/components/loading/loading.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-poclist-modal',
  templateUrl: './view-poclist-modal.component.html',
  styleUrls: ['./view-poclist-modal.component.scss']
})
export class ViewPoclistModalComponent implements OnInit {

  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<ViewPoclistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.loading = LoadingState.Ready;
  }

  close(flag){
    this.dialogRef.close(flag);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}
