import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'container';
  modalCreatePostComponent: any;

  ngOnInit(): void {
    loadRemoteModule('action-post', 'modal-create-post').then((file) => {
      this.modalCreatePostComponent = file.ModalCreatePostComponent;
    });
  }
}
