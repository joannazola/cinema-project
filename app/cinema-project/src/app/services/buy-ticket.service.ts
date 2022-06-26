import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuyTicketService {
  private siblingMsg = new Subject<string>();

  constructor() {}

  public getMessage(): Observable<string> {
    return this.siblingMsg.asObservable();
  }

  public updateMessage(message: string): void {
    this.siblingMsg.next(message);
  }
}
