import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { LeadsService } from '../../services/leads.service'
import { SettingService } from '../../services/setting.service'

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent implements OnInit {

  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;
  minDate:any
  minTime:any
  maxTime:any
  
  constructor(
    public dialogRef: MatDialogRef<AddTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private leadsService: LeadsService,
    private settingService: SettingService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.minDate = this.settingService.formatDate(new Date()) + ' ' + '00:00:00'

    this.form = this.formBuilder.group({
      task_name: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      remarks: [null]
    });
    this.loading = LoadingState.Ready;
  }

  formSubmit(){
    if (this.form.valid) {
      // this.loading = LoadingState.Processing;
      // var date = this.settingService.getOwlProperDate(this.settingService.formatDate(this.form.value.date) + ' ' + this.settingService.formatHMS(new Date(this.form.value.time)))
      
      // let param = {task: { name : this.form.value.task_name, date_time: date,remarks:this.form.value.remarks}}

      // this.leadsService.addLeadTask(this.data.id,param).subscribe(
      //   res=>{
      //       let task = res['result'].task  

      //       let data = {id: task.id, name: task.name, date_time: task.date_time}
      //       this.close(true,data)

      //       this.loading = LoadingState.Ready;
      //       this.toastr.success('Task Added', '', {
      //         timeOut: 3000,
      //       });
      //   },
      //   error=>{
      //     this.loading = LoadingState.Ready;
      //       this.toastr.error('Something went wrong', '', {
      //       timeOut: 3000,
      //     });
      //   }
      // )

    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  formatHandler(){
    let date = this.settingService.formatDate(this.form.value.date)
    let toDate = this.settingService.formatDate(new Date())

    if(toDate == date){
      this.minTime = this.settingService.formatDate(new Date()) + ' ' + this.settingService.formatHMS(new Date());
      
    }else{
      this.minTime = this.settingService.formatDate(this.form.value.date) + ' 00:00:00' ;
    }
    this.maxTime = this.settingService.formatDate(this.form.value.date) + ' 23:59:59' ;

    this.form.patchValue({
      time: ''
    });
  }

  close(key: boolean, data?) {
    if(key == false){
      this.dialogRef.close(key);
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
