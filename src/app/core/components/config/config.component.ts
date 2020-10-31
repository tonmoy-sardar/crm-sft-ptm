import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  visible: boolean;
  @Output() configData: EventEmitter<any>=  new EventEmitter<any>();
  @Input () headerThOption: any = [];
  allSelected: boolean;
  constructor() { }

  ngOnInit() {
    this.checkAllSelect()
  }

  allChange($event){
    console.log($event)
    this.headerThOption.forEach(x => {
      if($event){
        x.selected = true;
      }
      else{
        x.selected = false;
      }
    })
    this.configData.emit(this.headerThOption)
  }

  checkAllSelect(){
    var all = true
    this.headerThOption.forEach(x => {
      if(!x.selected){
        all = false;
      }
    })
    this.allSelected = all;
  }

  

  configChange(i,$event){
    console.log(i)
    console.log($event)
    if($event){
      this.headerThOption[i].selected = true;
    }
    else{
      this.headerThOption[i].selected = false;
    }
    this.checkAllSelect();
    this.configData.emit(this.headerThOption)
  }

  toggle(){
    this.visible = !this.visible
  }

  close(){
    this.visible = false
  }

}
