import { Component, OnInit } from '@angular/core';
import ISearchResults from 'src/app/models/search-existing/search-existing-results';

@Component({
  selector: 'app-search-previous-tracking',
  templateUrl: './search-previous-tracking.component.html',
  styleUrls: ['./search-previous-tracking.component.css']
})
export class SearchPreviousTrackingComponent implements OnInit {

  isAuthID:boolean = false;
  isShipID:boolean = false;
  isTrackNo:boolean = false;
  AuthID: number = 0;
  ShipperID: number = 0;
  TrackNo: number = 0;
  searchResults: ISearchResults[] =[];
  defaultColumnDefs = { sortable: true, editable: false, minWidth: 50, filter: true, resizable: true };
  columnDefs=[
    { headerName: 'Customer Number', field: 'CustNo'},
    { headerName: 'Customer Name', field: 'CustName'},
    { headerName: 'Order Number', field: 'OrderNo' },
    { headerName: 'PO Number', field: 'PO' },
    { headerName: 'Shipper ID', field: 'ShipperID' },
    { headerName: 'Destination DC', field: 'DestDC' },
    { headerName: 'Auth ID', field: 'AuthID' },
    { headerName: 'Tracking No', field: 'TrackingNo' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  performAuthIDSearch(value:number){

  }
  performTrackNoSearch(value:number){

  }
  performShipperIDSearch(value:number){

  }

  resetSearchBars(){
    this.AuthID = 0;
    this.ShipperID=0;
    this.TrackNo = 0;
  }
}
