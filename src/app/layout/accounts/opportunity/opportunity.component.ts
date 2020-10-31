import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
  @ViewChild('ctdTabset',{static: true}) ctdTabset;
  activeTab = 'opportunity_details';

  constructor(
    private location:Location,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.switchNgBTab(this.activeTab);
  }

  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  onTabChange($event: NgbTabChangeEvent) {
    this.activeTab = $event.nextId;    
  }

  openSettings(){
    this.router.navigateByUrl('/settings');
  }

  back(){
    this.router.navigateByUrl('/accounts');
  }


}
