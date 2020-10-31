import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Output,EventEmitter, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {
  @ViewChild('ctdTabset',{static: true}) ctdTabset;
  activeTab = 'my_pipeline';
  search_key='';
  selectedEmployee:any = 'all';
  origin = 'indian';
  dateRange=null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  radioChange(e){

  }

  formatHandler(e){

  }

  dateTimeReset(){
    this.dateRange = null;
  }  

  openSettings(){
    this.router.navigateByUrl('/settings');
  }

  ngAfterViewInit() {
    this.switchNgBTab(this.activeTab);
  }

  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  onTabChange($event: NgbTabChangeEvent) {
    this.activeTab = $event.nextId;
    console.log(this.activeTab)
  }

}
