import { Component } from '@angular/core';

import {ChangeDetectionStrategy, model} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-datepicker-in-line',
  templateUrl: './datepicker-in-line.component.html',
  styleUrl: './datepicker-in-line.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerInLineComponent {

  selectedDate: any;

  onSelect(event: any){
    this.selectedDate = event.toLocaleDateString();
  }

 }

