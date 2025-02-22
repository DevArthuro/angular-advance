import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fields-form',
  standalone: false,
  templateUrl: './fields-form.component.html',
  styleUrl: './fields-form.component.sass',
})
export class FieldsFormComponent {

  @Output() sendUser = new EventEmitter<{ email: string; name: string }>();

  name: string = '';
  email: string = '';

  constructor() {}

  sendData() {
    this.sendUser.emit({ email: this.email, name: this.name });
  }
}
