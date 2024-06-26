import { Component } from '@angular/core';

import {ChangeDetectionStrategy, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-datepicker-in-line',
  templateUrl: './datepicker-in-line.component.html',
  styleUrl: './datepicker-in-line.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerInLineComponent {

  selected = model<Date | null>();
  date! :any;

  seleccionarFecha () {
    this.date = this.selected()?.toLocaleDateString();
    return this.date;
  }
}

