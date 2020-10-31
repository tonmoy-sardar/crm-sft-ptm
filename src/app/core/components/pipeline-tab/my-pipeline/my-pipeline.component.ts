import { Component, OnInit } from '@angular/core';
import { OpportunityWonModalComponent } from '../../opportunity-won-modal/opportunity-won-modal.component';
import { OpportunityLostModalComponent } from '../../opportunity-lost-modal/opportunity-lost-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart} from '@angular/cdk/drag-drop';
import { AddTaskPipelineModalComponent } from '../../add-task-pipeline-modal/add-task-pipeline-modal.component';
import { AddToPresalesModalComponent } from '../../add-to-presales-modal/add-to-presales-modal.component';
import { ShowTaskModalComponent } from '../../show-task-modal/show-task-modal.component';
import { EditTilesModalComponent } from '../../edit-tiles-modal/edit-tiles-modal.component';
import { OpportunityDetailsModalComponent } from '../../../components/opportunity-details-modal/opportunity-details-modal.component';

@Component({
  selector: 'app-my-pipeline',
  templateUrl: './my-pipeline.component.html',
  styleUrls: ['./my-pipeline.component.scss']
})
export class MyPipelineComponent implements OnInit {
  showWonLost:boolean = false
  wonCard = [];
  lostCard = [];

  requirements = [
    {value: 'Get to work', price: 2500, btn:"btn-warning"},
    {value: 'Pick up groceries',  price: 2600, btn:"btn-success"},
    {value: 'Go home',  price: 2700, btn:"btn-danger"}
  ];

  presales = [
    {value: 'Get up',  price: 2800, btn:"btn-danger",disabled: false},
    {value: 'Brush teeth',  price: 2900, btn:"btn-success",disabled: false},
    {value: 'Take a shower',  price: 3000, btn:"btn-warning",disabled: false}
  ];

  proposal = [
    {value: 'Check e-mail',  price: 3100, btn:"btn-danger",disabled: false},
    {value: 'Walk dog',  price: 3200,btn:"btn-success"},
    {value: 'Test a shower',  price: 3300, btn:"btn-warning"}

  ];

  negotition = [
    {value: 'Check e-mail',  price: 3400, btn:"btn-success",disabled: false},
    {value: 'Walk dog',  price: 3500, btn:"btn-danger"},
    {value: 'Test a shower',  price: 3600, btn:"btn-warning"}

  ];

  verbal = [
    {value: 'Check e-mail',  price: 3700, btn:"btn-danger"},
    {value: 'Walk dog',  price: 3800, btn:"btn-success"},
    {value: 'Test a shower',  price: 3900, btn:"btn-warning"}

  ];

  agreement = [
    {value: 'Check e-mail',  price: 4000, btn:"btn-danger", disabled: true},
    {value: 'Walk dog',  price: 4100, btn:"btn-warning", disabled: true},
    {value: 'Test a shower',  price: 4200, btn:"btn-success", disabled: true}

  ];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  dragStarted(event: CdkDragStart<any>){
    this.showWonLost = true
  }

  drop(event: CdkDragDrop<string[]>) {
        
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
  
      if(event.previousContainer.id == 'requirements' && event.container.id == 'presales'){
        let dialogRef = this.dialog.open(AddToPresalesModalComponent, {
          width: '620px',
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result == true){
          }
        })
      }

    }
  
    this.showWonLost = false
  }

  wonDrop(event: CdkDragDrop<string[]>){

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    this.showWonLost = false
    
    let dialogRef = this.dialog.open(OpportunityWonModalComponent, {
      width: '525px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })

  }

  lostDrop(event: CdkDragDrop<string[]>){

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.showWonLost = false

    let dialogRef = this.dialog.open(OpportunityLostModalComponent, {
      width: '525px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }
  
  addTask(){
    let dialogRef = this.dialog.open(AddTaskPipelineModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px',
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
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  editTask(){
    let dialogRef = this.dialog.open(EditTilesModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '380px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  viewOpportunityDetails(){
    let dialogRef = this.dialog.open(OpportunityDetailsModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }
}
