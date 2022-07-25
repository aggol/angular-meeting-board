import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  finish$: Subject<void> = new Subject<void>();
  @Input() addressFormControl: FormControl;
  @Input() addressCheckboxFormControl: FormControl;
  @Input() lineMeetingFormControl: FormControl;
  @Input() lineMeetingCheckboxFormControl: FormControl;
}
