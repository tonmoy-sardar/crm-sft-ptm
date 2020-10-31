import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SettingService } from '../../../../core/services/setting.service';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  is_disabled: boolean = false;  
  departmentData:any = {
    id:null,
    name:null
  };

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,   
    private toastr: ToastrService,
    private settingService: SettingService,
  ) { }

  ngOnInit() {
    if(this.data.from == 'edit'){
      this.departmentData.id = this.data.details.id;      
      this.departmentData.name = this.data.details.name;      
    }
    this.form = this.formBuilder.group({
      name:[null, Validators.required]      
    }) 
  }

  submit(){    
    this.is_disabled = true;
    if(this.form.valid){
      let data = {
        name:this.form.value.name
      }
      if(this.data.from == 'add'){
        this.settingService.addDepartment(data).subscribe(
          res=>{            
            this.close(true);
          },
          error=>{
            this.is_disabled = false;
            this.toastr.error('Something went wrong', '', {
              timeOut: 3000,
            });
          }
        )
      } else if(this.data.from == 'edit'){
        this.settingService.editDepartment(this.departmentData.id, data).subscribe(
          res=>{            
            this.close(true);
          },
          error=>{
            this.is_disabled = false;
            this.toastr.error('Something went wrong', '', {
              timeOut: 3000,
            });
          }
        )
      } else {
        this.toastr.error('Please specify request type', '', {
          timeOut: 3000,
        });
      }    
    } else {
      this.is_disabled = false;
      this.markFormGroupTouched(this.form);
    }
  }

  close(key:boolean) {
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
