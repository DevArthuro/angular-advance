import { Injectable } from '@angular/core';

interface UserSchema {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: UserSchema[] = [];
  
  constructor() { }

  setUser(user: UserSchema): boolean {
    if (this.users.some((userStoraged) => userStoraged.email === user.email)) return false
    this.users.push(user);
    return true;
  }

  getUser(user: Pick<UserSchema, "email">): UserSchema | null {
    return this.users.find((userStoraged) => userStoraged.email  === user.email) ?? null;
  }

  getUsers() {
    return this.users;
  }
}
