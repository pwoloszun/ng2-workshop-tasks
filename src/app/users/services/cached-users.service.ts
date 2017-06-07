import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

import { User } from "./user.model";

@Injectable()
export class CachedUsersService {

  getNext(user: User): Observable<User> {
    return Observable.of(null); // TODO
  }

  getPrevious(user: User): Observable<User> {
    return Observable.of(null); // TODO
  }

  getAll(): Observable<User[]> {
    return Observable.of([]); // TODO
  }

  getById(id: number): Observable<User> {
    return Observable.of(null); // TODO
  }
}
