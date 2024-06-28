import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../Material.Module';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './component/datepicker/datepicker.component';
import { DatepickerInLineComponent } from './component/datepicker-in-line/datepicker-in-line.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './component/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    DatepickerComponent,
    DatepickerInLineComponent,
    MenubarComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
