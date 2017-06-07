import { Component } from '@angular/core';

import { LoggerService } from "../core/core.module";
import {
  LoggerService as OtherLoggerService,
  MyConfig
} from "../contact/contact.module";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private loggerService: LoggerService) {

    // console.log('Home otherLogger', this.otherLogger);
    // console.log('Home myConfig', this.myConfig);
  }
}
