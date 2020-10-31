import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { LoadingState } from '../../../../core/components/loading/loading.component';
import { ToastrService } from 'ngx-toastr';
import { AddPocModalComponent } from '../../../../core/components/add-poc-modal/add-poc-modal.component';
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
import { SettingService } from '../../../services/setting.service';
import { RemarksLogModalComponent } from '../../../../core/components/remarks-log-modal/remarks-log-modal.component';
@Component({
  selector: 'app-opportunity-details',
  templateUrl: './opportunity-details.component.html',
  styleUrls: ['./opportunity-details.component.scss']
})
export class OpportunityDetailsComponent implements OnInit {

  form: FormGroup;
  pocList = [
    {name: "Test", email: "test@test.com", phone: "2585626660", job: "Test", primary: 1 },
    {name: "Test1", email: "1test@test.com", phone: "111111111", job: "1Test", primary: 0},
  ];
  loading: LoadingState = LoadingState.NotReady;
  public closure_date = new FormControl(moment());
  public opportunity_date: any;

  constructor(   
    private formBuilder: FormBuilder,
    private settingService: SettingService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    var today = new Date();
    var closure = new Date('January 20, 2021')
    this.form = this.formBuilder.group({
      origin: ['indian', Validators.required],
      business_name: ['KGDF Bank', Validators.required],
      business_website: ['www.google.com'],
      cin: [null],
      pan: [null],
      gstin: [null],
      source: ['Facebook', Validators.required],      
      account_manager: ['Manojit', Validators.required],
      project_manager: ['Biswa'],
      department: ['Web Design', Validators.required],
      technology: ['IT', Validators.required],
      opportunity:  ['App Design', Validators.required],
      opportunity_date: [today, Validators.required],
      closure_date: [closure, Validators.required],
      engagement: ['Fixed Cost'],
      man_hours: ['8 hrs'],
      deal_value: ['107565'],
      mode_of_payment: ['Paypal'],      
      currency: ['Dollar', Validators.required],
      remarks: ['Lorem ipsum is dummy text']
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

  radioChange(e){

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

  submit(){

  }

  close(){
    
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
