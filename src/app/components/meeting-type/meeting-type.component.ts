import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MeetingTypeEnum } from '../../enums/meeting-type.enum';

@Component({
  selector: 'app-meeting-type',
  templateUrl: './meeting-type.component.html',
  styleUrls: ['./meeting-type.component.css'],
})
export class MeetingTypeComponent {
  @Input() meetingTypeAbstractControl: AbstractControl;
  @Output() meetingTypeValueEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  MeetingTypeEnum: typeof MeetingTypeEnum = MeetingTypeEnum;

  constructor() {}

  setMeetingTypeValue(value: string): void {
    this.meetingTypeAbstractControl.setValue(value);
    this.meetingTypeValueEventEmitter.emit(value);
  }
}
