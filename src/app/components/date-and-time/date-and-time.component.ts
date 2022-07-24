import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-and-time',
  templateUrl: './date-and-time.component.html',
  styleUrls: ['./date-and-time.component.css'],
})
export class DateAndTimeComponent {
  @Input() dateFormControl: FormControl;
  @Input() timeFromFormControl: FormControl;
  @Input() timeToFormControl: FormControl;
}
