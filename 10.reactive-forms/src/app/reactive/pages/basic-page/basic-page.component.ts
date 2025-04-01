import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms"

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  formProduct = new FormGroup({
    name: new FormControl(""),
    price: new FormControl(0),
    isStorage: new FormControl(0)
  });
}
