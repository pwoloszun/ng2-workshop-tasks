import { NgModule } from '@angular/core';

import { LoggerService } from "./services/logger.service";
import { MyConfigService } from "./services/my-config.service";
import { MyConfig } from "./services/my-config";
import { AppEnvService } from "./services/app-env.service";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    LoggerService,
    MyConfigService,
    AppEnvService,
    // TODO

    // {provide: 'MyConfigService', useValue: {name: 'bob'}},

    // {provide: MyConfig, useClass: MyConfigService},
    // {provide: MyConfig, useValue: {url: "http://rocketmind.pl"}},

    // {
    //   provide: LoggerService,
    //   useFactory: (appEnvService: AppEnvService) => {
    //     if (appEnvService.isProduction()) {
    //       return {name: 'bob'};
    //     } else {
    //       return new LoggerService();
    //     }
    //   },
    //   deps: [AppEnvService]
    // }
  ],
})
export class ContactModule {
}

export {
  LoggerService,
  MyConfig,
  MyConfigService,
  AppEnvService,
}
