import { Injectable } from '@angular/core';
import { colorEntity } from '../Entity/colorEntity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  GetColorList():colorEntity[] {
    return [
      {code: 'c0', name: 'Black'},
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Green'},
      {code: 'c3', name: 'Blue'},
      {code: 'c4', name: 'White'}
    ]
  }

  GetCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:3000/customer")
  }
}
