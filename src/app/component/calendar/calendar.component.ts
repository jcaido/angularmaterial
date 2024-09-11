import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent{

  selected: Date | null = null;
  dateSelected: any;
  timeAvailables: boolean = false;

  disabledDates = [
    new Date(2024, 8, 3),
    new Date(2024, 8, 12),
    new Date(2024, 8, 20),
    // agrega más fechas aquí
  ];

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return true;
    }
    const time = date.getTime();
    return this.disabledDates.some(d => d.getTime() === time);
  }

  onDateSelected(selectedDate: Date | null): void {
    this.dateSelected = selectedDate?.toLocaleDateString();
    this.timeAvailables = true
  }
}
