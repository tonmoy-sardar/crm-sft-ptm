import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-poc-modal',
  templateUrl: './add-poc-modal.component.html',
  styleUrls: ['./add-poc-modal.component.scss']
})
export class AddPocModalComponent implements OnInit {

  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<AddPocModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      job_title: [null],   /**  As described on page 16 **/
      phone: [null, [Validators.required, Validators.minLength(10),Validators.required,Validators.maxLength(12)]]
    });
    this.loading = LoadingState.Ready;
  }

  submit(){
    if(this.form.valid){
      this.close(true,this.form.value)
    }else{
      this.markFormGroupTouched(this.form)
    }
  }

  close(flag, data?){
    if(flag == false){
      this.dialogRef.close(flag);
    }else{
      this.dialogRef.close(data);
    }
    
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
