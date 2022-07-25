import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-meeting-name',
  templateUrl: './meeting-name.component.html',
  styleUrls: ['./meeting-name.component.css'],
})
export class MeetingNameComponent {
  @Input() meetingNameFormControl: FormControl;
}
