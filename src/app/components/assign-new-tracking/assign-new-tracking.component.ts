import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-assign-new-tracking',
  templateUrl: './assign-new-tracking.component.html',
  styleUrls: ['./assign-new-tracking.component.css']
})
export class AssignNewTrackingComponent implements OnInit {
  carrier: string = "";
  carrierList: string[] =['one','two', 'three'];


  constructor() { }

  ngOnInit(): void {
  }

  changeCarrierValue(value:any){
    this.carrier = value;
  }
}
