import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private static instanceCount = 0;

  constructor() {
    LoggerService.instanceCount++;
    console.log('OTHER LoggerService.instanceCount', LoggerService.instanceCount);
  }

  otherLog(msg: string) {
    console.log('OTHER', msg);
  }

  otherError(msg: string) {
    console.error('OTHER', msg);
  }
}
