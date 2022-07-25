import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MeetingTypeEnum } from '../../enums/meeting-type.enum';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
