import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { LoadingState } from '../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { AddPocModalComponent } from '../../../core/components/add-poc-modal/add-poc-modal.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { OwlDateTimeComponent, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import * as _moment from 'moment';
import { Moment } from 'moment';
const moment = (_moment as any).default ? (_moment as any).default : _moment
export const MY_MOMENT_DATE_TIME_FORMATS = {
  parseInput: 'MM/YYYY',
  fullPickerInput: 'l LT',
  datePickerInput: 'MM/YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
import { SettingService } from '../../services/setting.service';
import { RemarksLogModalComponent } from '../../components/remarks-log-modal/remarks-log-modal.component';
@Component({
  selector: 'app-add-opportunity-modal',
  templateUrl: './add-opportunity-modal.component.html',
  styleUrls: ['./add-opportunity-modal.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_DATE_TIME_FORMATS },
  ]
})
export class AddOpportunityModalComponent implements OnInit {

  form: FormGroup;
  pocList = [
    {name: "Test", email: "test@test.com", phone: "2585626660", job: "Test", primary: 1 },
    {name: "Test1", email: "1test@test.com", phone: "111111111", job: "1Test", primary: 0},
  ];
  loading: LoadingState = LoadingState.NotReady;
  public closure_date = new FormControl(moment());
  public opportunity_date: any;
  constructor(
    public dialogRef: MatDialogRef<AddOpportunityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private settingService: SettingService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    var today = new Date();
    this.form = this.formBuilder.group({
      business_name: [null, Validators.required],
      business_website: [null],
      business_source: [null],
      // remarks: [null],
      account_manager: [null],
      cin: [null],
      pan: [null],
      gstin: [null],
      opportunity:  [null, Validators.required],
      opportunity_date: [today, Validators.required],
      closure_date: [null, Validators.required],
      deal_value: [null],
      mode_of_payment: [null],
      // engagement: [null],
      // department: [null, Validators.required],
      // technology: [null],
      // business_url: [null],
      // man_hours: [null],
      // value: [null, Validators.required],
      currency: [null, Validators.required],
      remarks: [null]
    });
    this.loading = LoadingState.Ready;
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.closure_date.value;
    ctrlValue.year(normalizedYear.year());
    this.closure_date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment>) {
    const ctrlValue = this.closure_date.value;
    ctrlValue.month(normalizedMonth.month());
    this.closure_date.setValue(ctrlValue);    
    datepicker.close();
  }


  formatHandler(event){
    if (event.value != null) {
      let currentDate = new Date();
      let timeFormat = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
      this.opportunity_date = this.settingService.formatDate(event.value) + " " + timeFormat      
    }
  }

  close(flag){
    this.dialogRef.close(flag)
  }

  submit() {
    
  }

  viewRemarks() {
    let dialogRef = this.dialog.open(RemarksLogModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  addPOC() {
    let dialogRef = this.dialog.open(AddPocModalComponent, {
      backdropClass: 'popupBackdropClass',
      width: '525px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
      }
    })
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
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
