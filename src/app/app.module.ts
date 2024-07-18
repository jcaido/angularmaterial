import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../Material.Module';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './component/datepicker/datepicker.component';
import { DatepickerInLineComponent } from './component/datepicker-in-line/datepicker-in-line.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormdesignComponent } from './component/formdesign/formdesign.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    DatepickerComponent,
    DatepickerInLineComponent,
    MenubarComponent,
    HomeComponent,
    CalendarComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
    FormdesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
