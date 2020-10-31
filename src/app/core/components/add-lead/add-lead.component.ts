import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { LeadsService } from '../../../core/services/leads.service'
import { SettingService } from '../../../core/services/setting.service'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {

  form: FormGroup;
  countryList = []
  sourceList = []
  loading: LoadingState = LoadingState.NotReady;

  constructor(
    public dialogRef: MatDialogRef<AddLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private leadsService: LeadsService,
    private settingService: SettingService
  ) { }

  ngOnInit() {
   
    this.form = this.formBuilder.group({
      business_name: [null, Validators.required],
      url: [null, [Validators.pattern(this.settingService.validURLRegex())]],
      cin: [null, [Validators.pattern(this.settingService.validateCINRegex())]],
      pan: [null, [Validators.pattern(this.settingService.validatePANRegex())]],
      gstin: [null, [Validators.pattern(this.settingService.validateGSTINRegex())]],
      first_name:  [null, Validators.required],
      last_name:  [null],
      country: [null, Validators.required],
      phone: [null, [Validators.required,Validators.minLength(10),Validators.required,Validators.maxLength(12)]],
      mobile: [null, [Validators.minLength(10),Validators.required,Validators.maxLength(12)]],
      email: [null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/)]],
      job_title: [null],
      source: [null, Validators.required],
      remarks: [null],
    });

    // this.getMasterData()
  }

  // getMasterData(){
  //   var forkArray = [];
  //   let param = 'page=1&page_size=0';
  //   forkArray.push(this.leadsService.getCountryList())
  //   forkArray.push(this.leadsService.getSourceList(param))
  //   forkJoin(forkArray).subscribe(
  //     ([getCountryList,getSourceList]) => {
  //       if (getCountryList) {
  //         this.countryList = getCountryList['result'];
  //       }

  //       if(getSourceList){
  //         this.sourceList = getSourceList['results']
  //       }
        
  //       this.loading = LoadingState.Ready;
  //     },
  //     error => {
  //       this.loading = LoadingState.Ready;
  //       this.toastr.error('Something went wrong!', '', {
  //         timeOut: 3000,
  //       });
  //     }
  //   )
  // }

  formSubmit(){
    if (this.form.valid) {
      // this.loading = LoadingState.Processing;
      // let pocData = { first_name: this.form.value.first_name, last_name: this.form.value.last_name, phone: this.form.value.phone, country: this.form.value.country, mobile: this.form.value.mobile, email: this.form.value.email, 
      // job_title: this.form.value.job_title, is_primary: true, url: this.form.value.url, source: this.form.value.source }

      // let data = {
      //   business_name: this.form.value.business_name,
      //   cin: this.form.value.cin,
      //   gstin: this.form.value.gstin,
      //   pan:this.form.value.pan,
      //   remarks:this.form.value.remarks,
      //   poc: pocData
      // }
      // this.leadsService.addLead(data).subscribe(
      //   res=>{
      //     this.close(true);

      //     this.toastr.success('Lead Added', '', {
      //       timeOut: 3000,
      //     });
      //   },
      //   error=>{
      //     this.loading = LoadingState.Ready;
      //     this.toastr.error('Something went wrong', '', {
      //     timeOut: 3000,
      //   });
      //   }
      // )
    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  formatHandler( event){

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
