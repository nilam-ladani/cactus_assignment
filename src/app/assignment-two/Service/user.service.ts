import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = new BehaviorSubject<any>([]);

  constructor() { }

  getUsers(value) {
    this.users.next(value);
  }
}
