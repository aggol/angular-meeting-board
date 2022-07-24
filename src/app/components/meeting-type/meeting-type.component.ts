import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MeetingTypeEnum } from '../../enums/meeting-type.enum';

@Component({
  selector: 'app-meeting-type',
  templateUrl: './meeting-type.component.html',
  styleUrls: ['./meeting-type.component.css'],
})
export class MeetingTypeComponent {
  @Input() meetingTypeFormControl: FormControl;
  @Output() meetingTypeValueEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  MeetingTypeEnum: typeof MeetingTypeEnum = MeetingTypeEnum;

  setMeetingTypeValue(value: string): void {
    this.meetingTypeFormControl.setValue(value);
    this.meetingTypeValueEventEmitter.emit(value);
  }
}
