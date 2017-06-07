import { Injectable } from '@angular/core';

@Injectable()
export class MyConfigService {
  private static instanceCount = 0;

  constructor() {
    console.log('MyPersonService', MyConfigService.instanceCount);
  }

  xxx(msg: string) {
    console.log('MyPersonService#xxx', msg);
  }

  yyy(): number {
    console.log('MyPersonService#yyy');
    return 123;
  }

}
