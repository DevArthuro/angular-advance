import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'list-posts-page',
  templateUrl: './list-posts-page.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './list-posts-page.component.scss'
})
export default class ListPostsPageComponent {
  postService = inject(PostService)
}
