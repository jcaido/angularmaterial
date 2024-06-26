import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule
  ]
})
export class MaterialModule{}
