import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from '../../components/header/header.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, NgComponentOutlet, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export default class LayoutComponent implements OnInit {
  buttonCreatePostComponent: any;

  broadcast: BroadcastChannel;
  constructor() {
    this.broadcast = new BroadcastChannel('comunication');
    this.callAction();
  }

  callAction() {
    this.broadcast.onmessage = (even) => {
      console.log(even.data);
    };
  }

  ngOnInit(): void {
    loadRemoteModule('action-post', 'button-create-post').then((file) => {
      this.buttonCreatePostComponent = file.ButtonCreatePostComponent;
    });
  }
}
