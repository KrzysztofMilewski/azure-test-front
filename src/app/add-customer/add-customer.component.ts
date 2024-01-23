import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerModel } from '../models/customer-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {

  constructor(private _fb: FormBuilder, private _http: HttpClient, private _router: Router){}

  form = this._fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]]
  });

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const req = this.form.value as CustomerModel;
    this._http.post('api/customers', req).subscribe(_=>this._router.navigate(['/customers']));
  }
}
