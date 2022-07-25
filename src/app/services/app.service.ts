import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppModule } from '../app.module';
import { BOARDINVITEES } from '../data/mock-board-invitees';
import { BoardInviteeModel } from '../models/board-invitee.model';

@Injectable({ providedIn: AppModule })
export class AppService {
  constructor() {}

  getBoardInvitees(): Observable<BoardInviteeModel[]> {
    return of(BOARDINVITEES);
  }
}
