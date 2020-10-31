import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-won',
  templateUrl: './close-won.component.html',
  styleUrls: ['./close-won.component.scss']
})
export class CloseWonComponent implements OnInit {

  saleData: any = [];
  viewHW = [];
  from_date: string;
  to_date: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.saleData = [
      { name: "Jan", value: 3 },
      { name: "Feb", value: 4 },
      { name: "Mar", value: 2 },
      { name: "Apr", value: 3 },
      { name: "May", value: 8 },
      { name: "Jun", value: 10 },
      { name: "Jul", value: 6 },
      { name: "Aug", value: 1 },
      { name: "Sep", value: 7 },
      { name: "Oct", value: 8 },
      { name: "Nov", value: 4 },
      { name: "Dec", value: 7 }
    ];
    this.viewHW = [900, 400];
  }

  fromDateReset(){
    this.from_date = null;
  }

  toDateReset(){
    this.to_date = null;
  }

  formatHandler(e){
    
  }

  openSettings(){
    this.router.navigateByUrl('/settings');
  }

}
