import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/customer-model';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.scss']
})
export class GetCustomersComponent implements OnInit{
  constructor(private _http: HttpClient){}
  customers: CustomerModel[] = [];
  dataLoaded: boolean = false;

  ngOnInit(): void {
    this._http.get<CustomerModel[]>('api/customers').subscribe((result: CustomerModel[])=>{
      this.customers = result;
      this.dataLoaded = true;
    })
  }

}
