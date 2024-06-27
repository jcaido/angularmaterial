import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { DatepickerInLineComponent } from './component/datepicker-in-line/datepicker-in-line.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'datepicker', component: DatepickerInLineComponent},
  {path:'autocomplete', component: AutocompleteComponent},
  {path:'input', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
