import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInLineComponent } from './datepicker-in-line.component';

describe('DatepickerInLineComponent', () => {
  let component: DatepickerInLineComponent;
  let fixture: ComponentFixture<DatepickerInLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerInLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerInLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
