import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';

@Component({
  selector: 'app-opportunity-card-modal',
  templateUrl: './opportunity-card-modal.component.html',
  styleUrls: ['./opportunity-card-modal.component.scss']
})
export class OpportunityCardModalComponent implements OnInit {  

  title: any;
  constructor(
    public dialogRef: MatDialogRef<OpportunityCardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    this.title = this.data['title']
  }

  close(key: boolean) {
    this.dialogRef.close(key);
  }

}
