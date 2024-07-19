import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrl: './formdesign.component.css'
})
export class FormdesignComponent implements OnInit {

  countryList = ['India', 'USA', 'Singapore', 'UK'];
  termList = ['15days', '30days', '45days', '60days'];

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.customerform.setValue({
      name: 'cris',
      email: 'crisrogar@gmail.com',
      phone: '677877679',
      country: 'USA',
      address: 'eL RUBIO, 89',
      term: '45days',
      dbo: new Date(2024,3,25),
      gender: 'Male',
      status: false
    })
  }

  customerform = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    term: this.builder.control('', Validators.required),
    dbo: this.builder.control(new Date(2024,3,25)),
    gender: this.builder.control('Female'),
    status: this.builder.control(true)
  });

  saveCustomer() {
    console.log(this.customerform.value);
  }

  clearForm() {
    this.customerform.reset();
  }

}
