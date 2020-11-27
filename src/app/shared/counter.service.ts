import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = 0;
  private _config = 'John Doe';

  constructor() {}
}
