import { Injectable } from "@angular/core";

import { User } from './user.model';
import { DataApiService } from "../../core/core.module";

@Injectable()
export class UsersApiService extends DataApiService<User> {
  getUrl(): string {
    return 'assets/server/users-data.json';
  }
}
