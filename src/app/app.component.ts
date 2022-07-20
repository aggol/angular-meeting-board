import { Component, OnInit, VERSION } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MeetingNameEnum } from './enums/meeting-name.enum';
import { MeetingTypeEnum } from './enums/meeting-type.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      meetingType: new FormControl(),
      meetingName: new FormControl(),
      date: new FormControl(),
      timeFrom: new FormControl(),
      timeTo: new FormControl(),
      address: new FormControl(),
      onlineMeeting: new FormControl(),
      allInvitees: new FormControl(),
      guest: new FormControl(),
      boardInvitee: new FormControl(),
    });
    this.setForm();
  }

  private setForm(): void {
    this.meetingTypeAbstractControl.setValue(MeetingTypeEnum.boardMeeting);
    this.setMeetingNameValue(MeetingNameEnum.boardMeeting);
  }

  setMeetingNameValue(value: string) {
    if (value === MeetingTypeEnum.boardMeeting) {
      this.meetingNameAbstractControl.setValue(MeetingNameEnum.boardMeeting);
    }

    if (value === MeetingTypeEnum.generalAssembly) {
      this.meetingNameAbstractControl.setValue(MeetingNameEnum.generalAssembly);
    }
    if (value === MeetingTypeEnum.other) {
      this.meetingNameAbstractControl.setValue(null);
    }
    console.log(this.meetingNameAbstractControl.value);
  }

  get meetingTypeAbstractControl(): AbstractControl {
    return this.form.get('meetingType');
  }

  get meetingNameAbstractControl(): AbstractControl {
    return this.form.get('meetingName');
  }

  get dateAbstractControl(): AbstractControl {
    return this.form.get('date');
  }

  get timeFromAbstractControl(): AbstractControl {
    return this.form.get('timeFrom');
  }

  get timeToAbstractControl(): AbstractControl {
    return this.form.get('timeTo');
  }

  get addressAbstractControl(): AbstractControl {
    return this.form.get('address');
  }

  get onlineMeetingAbstractControl(): AbstractControl {
    return this.form.get('onlineMeeting');
  }

  get allInviteesAbstractControl(): AbstractControl {
    return this.form.get('allInvitees');
  }

  get guestAbstractControl(): AbstractControl {
    return this.form.get('guest');
  }

  get boardInviteeAbstractControl(): AbstractControl {
    return this.form.get('boardInvitee');
  }
}
