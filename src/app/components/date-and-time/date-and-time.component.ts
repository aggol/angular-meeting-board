import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-date-and-time',
  templateUrl: './date-and-time.component.html',
  styleUrls: ['./date-and-time.component.css'],
})
export class DateAndTimeComponent {
  @Input() dateFormControl: FormControl;
  @Input() timeFromFormControl: FormControl;
  @Input() timeToFormControl: FormControl;
}
