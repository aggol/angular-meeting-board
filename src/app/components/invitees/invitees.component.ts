import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invitees',
  templateUrl: './invitees.component.html',
  styleUrls: ['./invitees.component.css'],
})
export class InviteesComponent {
  isButtonBoardActive: boolean = true;
  isButtonGuestsActive: boolean = false;
  @Input() allInviteesFormControl: FormControl;
  @Input() guestFormControl: FormControl;
  @Input() boardInviteeFormControl: FormControl;

  activeButton(value1: boolean, value2: boolean): void {
    this.isButtonBoardActive = value1;
    this.isButtonGuestsActive = value2;
  }
}
