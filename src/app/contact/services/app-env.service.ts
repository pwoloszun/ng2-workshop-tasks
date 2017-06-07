import { Injectable } from '@angular/core';

@Injectable()
export class AppEnvService {

  isProduction(): boolean {
    return false;
  }
}
