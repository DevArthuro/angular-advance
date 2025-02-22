import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.sass',
})
export class UserFormComponent {
  messageError: string = '';

  constructor(private userService: UsersService) {}

  sendUser({name, email}: {
    name: string;
    email: string
  }) {
    if (!name || !email) {
      this.messageError = 'The fields is not fill out';
      return;
    }
    if (this.getUserExists(email)) {
      this.messageError = 'This user already exists';
      email = "";
      return;
    }
    this.userService.setUser({ name, email });
  }

  private getUserExists(email: string): boolean {
    const user = this.userService.getUser({ email });
    if (user) {
      this.messageError = 'User is already exists';
      return true;
    }
    return false;
  }
}
