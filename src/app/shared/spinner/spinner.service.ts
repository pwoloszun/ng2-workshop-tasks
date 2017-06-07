import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface SpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  private spinnerSubject = new BehaviorSubject<SpinnerState>({show: false});
  spinnerState = this.spinnerSubject.asObservable();

  show() {
    this.spinnerSubject.next({show: true});
  }

  hide() {
    this.spinnerSubject.next({show: false});
  }
}
