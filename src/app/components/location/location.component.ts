import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  @Input() addressAbstractControl: AbstractControl;
  @Input() onlineMeetingAbstractControl: AbstractControl;

  constructor() {}

  ngOnInit() {}
}
