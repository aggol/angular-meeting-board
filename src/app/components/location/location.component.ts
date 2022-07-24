import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  finish$: Subject<void> = new Subject<void>();
  @Input() addressFormControl: FormControl;
  @Input() onlineMeetingFormControl: FormControl;
  @Input() addressCheckboxFormControl: FormControl;
  @Input() onlineMeetingCheckboxFormControl: FormControl;
}
