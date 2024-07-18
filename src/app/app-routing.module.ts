import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { DatepickerInLineComponent } from './component/datepicker-in-line/datepicker-in-line.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'autocomplete', component: AutocompleteComponent},
  {path:'input', component: InputComponent},
  {path:'card', component: CardComponent},
  {path:'slider', component: SliderComponent},
  {path:'table', component: TableComponent},
  {path:'formdesign', component: FormdesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
