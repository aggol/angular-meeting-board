import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-invitees',
  templateUrl: './invitees.component.html',
  styleUrls: ['./invitees.component.css'],
})
export class InviteesComponent implements OnInit {
  isButtonBoardActive: boolean = true;
  isButtonGuestsActive: boolean = false;
  @Input() allInviteesAbstractControl: AbstractControl;
  @Input() guestAbstractControl: AbstractControl;
  @Input() boardInviteeAbstractControl: AbstractControl;

  constructor() {}

  ngOnInit() {}

  activeButton(value1: boolean, value2: boolean): void {
    this.isButtonBoardActive = value1;
    this.isButtonGuestsActive = value2;
  }
}
