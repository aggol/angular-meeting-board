import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-meeting-type',
  templateUrl: './meeting-type.component.html',
  styleUrls: ['./meeting-type.component.css'],
})
export class MeetingTypeComponent implements OnInit {
  @Input() meetingTypeAbstractControl: AbstractControl;
  constructor() {}

  ngOnInit() {}
}
