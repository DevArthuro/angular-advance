import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.scss'
})
export class CardPostComponent {
  post = input.required<{id: string, title: string, description: string}>();
}
