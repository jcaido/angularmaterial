import { Component } from '@angular/core';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrl: './formdesign.component.css'
})
export class FormdesignComponent {

  countryList = ['India', 'USA', 'Singapore', 'UK'];
  termList = ['15days', '30days', '45days', '60days'];

}
