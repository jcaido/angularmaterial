import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  selectedValue :number = 25;
  startValue :number = 30;
  endValue :number = 70;
}
