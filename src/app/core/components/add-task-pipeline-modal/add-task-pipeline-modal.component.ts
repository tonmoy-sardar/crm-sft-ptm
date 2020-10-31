import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-task-pipeline-modal',
  templateUrl: './add-task-pipeline-modal.component.html',
  styleUrls: ['./add-task-pipeline-modal.component.scss']
})
export class AddTaskPipelineModalComponent implements OnInit {


  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<AddTaskPipelineModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      follow_up: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      remarks: [null]
    });
    this.loading = LoadingState.Ready;
  }

  formatHandler( event){

  }

  submit() {
    
  }

  close(key: boolean) {
    this.dialogRef.close(key);
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && (form.get(field).dirty || form.get(field).touched);
  }

  displayFieldCss(form: FormGroup, field: string) {
    return {
      'is-invalid': form.get(field).invalid && (form.get(field).dirty || form.get(field).touched),
      'is-valid': form.get(field).valid && (form.get(field).dirty || form.get(field).touched)
    };
  }
}
