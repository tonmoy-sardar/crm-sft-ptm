import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { LeadsService } from '../../services/leads.service'
import { SettingService } from '../../services/setting.service'

@Component({
  selector: 'app-show-task-modal',
  templateUrl: './show-task-modal.component.html',
  styleUrls: ['./show-task-modal.component.scss']
})
export class ShowTaskModalComponent implements OnInit {
  showForm:boolean = false
  form: FormGroup;
  loading: LoadingState = LoadingState.NotReady;
  taskList = []
  minDate:any
  minTime:any
  maxTime:any

  constructor(
    public dialogRef: MatDialogRef<ShowTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private leadsService: LeadsService,
    private settingService: SettingService,
    private toastr: ToastrService,
  ) { }


  ngOnInit() {
    this.taskList = this.data
    this.minDate = this.settingService.formatDate(new Date()) + ' ' + '00:00:00'

    this.form = this.formBuilder.group({
      taskId: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
    });
    this.loading = LoadingState.Ready;
  }

  markAsComplete(taskId:number, index:number){
    this.loading = LoadingState.Processing;
    let param = {is_completed: true}
    // this.leadsService.changeLeadTaskStatus(taskId,param).subscribe(
    //   res=>{
         
    //       this.close(true)
    //       this.taskList.splice(index,1)
    //       this.loading = LoadingState.Ready;
    //       this.toastr.success('Task Completed', '', {
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
  }

  submit(){
    if (this.form.valid) {
      // this.loading = LoadingState.Processing;
      // var date = this.settingService.getOwlProperDate(this.settingService.formatDate(this.form.value.date) + ' ' + this.settingService.formatHMS(new Date(this.form.value.time)))
      
      // let param = { date_time: date}

      // this.leadsService.changeLeadTaskStatus(this.form.value.taskId,param).subscribe(
      //   res=>{
          
      //       this.close(true)

      //       this.loading = LoadingState.Ready;
      //       this.toastr.success('Task Rescheduled', '', {
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

  reschedule(taskId:number){
    this.showForm = true
    this.form.patchValue({
      taskId: taskId
    });
  }

  closeform(){
    this.showForm = false
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
