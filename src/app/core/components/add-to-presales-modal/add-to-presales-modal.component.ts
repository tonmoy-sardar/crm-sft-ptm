import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-to-presales-modal',
  templateUrl: './add-to-presales-modal.component.html',
  styleUrls: ['./add-to-presales-modal.component.scss']
})
export class AddToPresalesModalComponent implements OnInit {

  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;
  ba = [
    {name:"text", number: 0, available:1},
    {name:"text2", number: 2, available:2},
    {name:"text3", number: 4, available:3}
  ]


  constructor(
    public dialogRef: MatDialogRef<AddToPresalesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      ba: [null, Validators.required],
      project_lead: [null, Validators.required],
      department: [null, Validators.required],
      document: [null, Validators.required],
      document_name: [null, Validators.required],
      file: [null, Validators.required],
    });
    this.loading = LoadingState.Ready;
  }

  close(flag){
    this.dialogRef.close(flag);
  }

  onSelectFile(e){
    
  }

  submit(){
    if (this.form.valid) {

    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  clear(item:any){

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
