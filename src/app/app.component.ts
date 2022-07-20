import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      meetingName: new FormControl(),
      meetingType: new FormControl(),
      date: new FormControl(),
      timeFrom: new FormControl(),
      timeTo: new FormControl(),
      location: new FormControl(),
      brokeragePercent: new FormControl(),
      brokeragePln: new FormControl(),
      allInvitees: new FormControl(),
      guest: new FormControl(),
      boardInvitee: new FormControl(),
    });
    // this.setForm();
  }
}
