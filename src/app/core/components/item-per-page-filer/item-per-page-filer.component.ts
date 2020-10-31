import { Component, OnInit,Output, EventEmitter,Input} from '@angular/core';
import * as Globals from '../../globals';

@Component({
  selector: 'app-item-per-page-filer',
  templateUrl: './item-per-page-filer.component.html',
  styleUrls: ['./item-per-page-filer.component.scss']
})
export class ItemPerPageFilerComponent implements OnInit {

  itemPerPageNumList:any = [];
  itemPerPage:number;
  @Output() countSelectionChanged: EventEmitter<number> =  new EventEmitter<number>();
  @Input() item:number;

  constructor() {
    this.itemPerPageNumList = Globals.itemPerPageNumList;
   }

  ngOnInit() {
    //console.log(this.item)
  }
  onSelectionChange() {
    this.countSelectionChanged.emit(this.item);
  }
}
