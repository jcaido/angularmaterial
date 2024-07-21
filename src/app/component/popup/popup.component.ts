
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {

  inputdata: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupComponent>, private builder :FormBuilder) {}

  ngOnInit(): void {
    this.inputdata = this.data;
  }

  closepopup() {
    this.ref.close('Close using function');
  }

  myForm = this.builder.group({
    name: this.builder.control(''),
    email: this.builder.control(''),
    phone: this.builder.control(''),
    status: this.builder.control(true),
  })

  saveUser() {
    console.log(this.myForm.value);
  }

}
