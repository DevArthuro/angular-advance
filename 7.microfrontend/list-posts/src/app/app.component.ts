import { Component } from '@angular/core';
import ListPostsPageComponent from './pages/list-posts-page/list-posts-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListPostsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'list-posts';
}
