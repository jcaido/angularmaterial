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

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    DatepickerComponent
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
