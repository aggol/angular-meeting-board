import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BoardInviteeModel } from '../../models/board-invitee.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-invitees',
  templateUrl: './invitees.component.html',
  styleUrls: ['./invitees.component.css'],
})
export class InviteesComponent implements OnInit, OnDestroy {
  finish$: Subject<void> = new Subject<void>();
  guestEmailAddresses: Array<string> = [];
  isTabBoardActive: boolean = true;
  isTabGuestsActive: boolean = false;
  isButtonActive: boolean = false;
  @Input() boardInvitees: BoardInviteeModel[];
  @Input() allInviteesFormControl: FormControl;
  @Input() guestFormControl: FormControl;

  @Input() boardInviteeFormControl: FormControl;

  ngOnInit(): void {
    this.initWatchers();
  }

  private initWatchers(): void {
    this.guestFormControl.valueChanges
      .pipe(takeUntil(this.finish$))
      .subscribe((value) => {
        value ? (this.isButtonActive = true) : !this.isButtonActive;
      });
  }

  addGuest(): void {
    this.guestEmailAddresses.push(this.guestFormControl?.value);
    this.guestFormControl.reset();
    this.isButtonActive = false;
  }

  activeTab(value1: boolean, value2: boolean): void {
    this.isTabBoardActive = value1;
    this.isTabGuestsActive = value2;
  }

  ngOnDestroy(): void {
    this.finish$.next();
    this.finish$.complete();
  }
}
