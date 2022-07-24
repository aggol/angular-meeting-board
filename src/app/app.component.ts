import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MeetingNameEnum } from './enums/meeting-name.enum';
import { MeetingTypeEnum } from './enums/meeting-type.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  finish$: Subject<void> = new Subject<void>();
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.initForm();
    this.initWatchers();
  }

  private initForm(): void {
    this.form = new FormGroup({
      meetingType: new FormControl(),
      meetingName: new FormControl(),
      date: new FormControl(),
      timeFrom: new FormControl(),
      timeTo: new FormControl(),
      address: new FormControl(),
      addressCheckbox: new FormControl(),
      onlineMeeting: new FormControl(),
      onlineMeetingCheckbox: new FormControl(),
      allInvitees: new FormControl(),
      guest: new FormControl(),
      boardInvitee: new FormControl(),
    });
    this.setForm();
  }

  private setForm(): void {
    this.meetingTypeFormControl.setValue(MeetingTypeEnum.boardMeeting);
    this.meetingNameFormControl.setValue(MeetingNameEnum.boardMeeting);
    this.onlineMeetingCheckboxFormControl.setValue(true);
    this.addressCheckboxFormControl.setValue(false);
    this.addressFormControl.disable();
    this.dateFormControl.setValue('2022-12-08');
    this.timeFromFormControl.setValue('11:00');
    this.timeToFormControl.setValue('12:30');
  }

  private initWatchers(): void {
    this.meetingTypeFormControl?.valueChanges
      .pipe(takeUntil(this.finish$))
      .subscribe((value: string): void => {
        this.setMeetingNameValue(value);
      });

    this.addressCheckboxFormControl.valueChanges
      .pipe(takeUntil(this.finish$))
      .subscribe((value) => {
        value
          ? this.addressFormControl.enable()
          : this.addressFormControl.disable();
      });

    this.onlineMeetingCheckboxFormControl.valueChanges
      .pipe(takeUntil(this.finish$))
      .subscribe((value) => {
        value
          ? this.onlineMeetingFormControl.enable()
          : this.onlineMeetingFormControl.disable();
      });
  }

  setMeetingNameValue(value: string) {
    if (value === MeetingTypeEnum.boardMeeting) {
      this.meetingNameFormControl.setValue(MeetingNameEnum.boardMeeting);
    }

    if (value === MeetingTypeEnum.generalAssembly) {
      this.meetingNameFormControl.setValue(MeetingNameEnum.generalAssembly);
    }
    if (value === MeetingTypeEnum.other) {
      this.meetingNameFormControl.setValue(null);
    }
  }

  ngOnDestroy(): void {
    this.finish$.next();
    this.finish$.complete();
  }

  get meetingTypeFormControl(): FormControl {
    return this.form.get('meetingType') as FormControl;
  }

  get meetingNameFormControl(): FormControl {
    return this.form.get('meetingName') as FormControl;
  }

  get dateFormControl(): FormControl {
    return this.form.get('date') as FormControl;
  }

  get timeFromFormControl(): FormControl {
    return this.form.get('timeFrom') as FormControl;
  }

  get timeToFormControl(): FormControl {
    return this.form.get('timeTo') as FormControl;
  }

  get addressFormControl(): FormControl {
    return this.form.get('address') as FormControl;
  }

  get addressCheckboxFormControl(): FormControl {
    return this.form.get('addressCheckbox') as FormControl;
  }

  get onlineMeetingFormControl(): FormControl {
    return this.form.get('onlineMeeting') as FormControl;
  }

  get onlineMeetingCheckboxFormControl(): FormControl {
    return this.form.get('onlineMeetingCheckbox') as FormControl;
  }
  get allInviteesFormControl(): FormControl {
    return this.form.get('allInvitees') as FormControl;
  }

  get guestFormControl(): FormControl {
    return this.form.get('guest') as FormControl;
  }

  get boardInviteeFormControl(): FormControl {
    return this.form.get('boardInvitee') as FormControl;
  }
}
