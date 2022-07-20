import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-date-and-time',
  templateUrl: './date-and-time.component.html',
  styleUrls: ['./date-and-time.component.css'],
})
export class DateAndTimeComponent implements OnInit {
  @Input() dateAbstractControl: AbstractControl;
  @Input() timeFromAbstractControl: AbstractControl;
  @Input() timeToAbstractControl: AbstractControl;

  constructor() {}

  ngOnInit() {}
}
