import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      project: [null, Validators.required],
      territory: [null, Validators.required],
      opportunity:  [null, Validators.required],
      account_name:  [null, Validators.required],
      cin: [null, Validators.required],
      pan: [null, Validators.required],
      gstin: [null, Validators.required],
      name: [null, Validators.required],
      job_title: [null, Validators.required],
      email: [null, [Validators.required,,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/)]],
      phone: [null, Validators.required],
      country: [null, Validators.required],
      url: [null, Validators.required],
      lead_source: [null, Validators.required],
      department: [null, Validators.required],
      technology: [null, Validators.required],
      domain: [null, Validators.required],
      project_manager: [null, Validators.required],
      business_analyst: [null, Validators.required],
      start_date:  [null, Validators.required],
      win_date:  [null, Validators.required],
      total_cost:  [null, Validators.required],
      man_hours:  [null, Validators.required],
      engagement:  [null, Validators.required],
      project_description:  [null, Validators.required],
      proposal_document: [null],
      proposal_file: [null],
      consent_document: [null, Validators.required],
      consent_file: [null, Validators.required],
    });
    this.loading = LoadingState.Ready;
  }
  
  formSubmit(){
    if (this.form.valid) {

    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  formatHandler( event){

  }

  onSelectFile(event) {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event) => {
          // console.log(event.target.result);
        }
        // const control = <FormArray>this.form.controls['quotation_inner_tab'];
        // control.at(index).patchValue({
        //   document: event.target.files[0]['name'],
        //   quotation_document: event.target.files[0]

        // })
        // reader.readAsDataURL(event.target.files[i]);
      }

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
