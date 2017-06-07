import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private static instanceCount = 0;

  constructor() {
    LoggerService.instanceCount++;
    console.log('LoggerService.instanceCount', LoggerService.instanceCount);
  }

  log(msg: string) {
    console.log(msg);
  }

  error(msg: string) {
    console.error(msg);
  }
}
