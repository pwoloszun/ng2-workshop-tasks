import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoggerService } from '../../core/core.module';
import { SpinnerState, SpinnerService } from './spinner.service';

@Component({
  selector: 'wt-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;
  private spinnerStateChanged: Subscription;

  constructor(private loggerService: LoggerService,
              private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => {
        this.visible = state.show;
        this.loggerService.log(`visible=${this.visible}`);
      });
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
