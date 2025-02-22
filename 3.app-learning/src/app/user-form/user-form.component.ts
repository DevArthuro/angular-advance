import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.sass',
})
export class UserFormComponent {
  name: string = '';
  email: string = '';
  messageError: string = '';

  constructor(private userService: UsersService) {}

  sendUser() {
    if (!this.name || !this.email) {
      this.messageError = 'The fields is not fill out';
      return;
    }
    if (this.getUserExists()) {
      this.messageError = 'This user already exists';
      this.email = "";
      return;
    }
    this.resetMessageError()
    this.userService.setUser({ name: this.name, email: this.email });
  }

  private getUserExists(): boolean {
    const user = this.userService.getUser({ email: this.email });
    if (user) {
      this.messageError = 'User is already exists';
      return true;
    }
    this.resetMessageError();
    return false;
  }

  private resetMessageError() {
    this.messageError = '';
  }
}
