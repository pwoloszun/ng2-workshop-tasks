import { Component } from '@angular/core';
import { LoggerService } from "../../core/services/logger.service";

@Component({
  selector: 'wt-hello-world',
  template: `<h5>Hello!</h5>`,
})
export class HelloWorldComponent {
  name: string;

  constructor(private loggerService: LoggerService) {
  }
}
