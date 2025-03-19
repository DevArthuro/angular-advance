import { Component, inject } from '@angular/core';
import { PostSevice } from '../../service/post.service';
import { CardPostComponent } from "../../components/card-post/card-post.component";

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CardPostComponent],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.scss'
})
export default class ListPostComponent {
  postService = inject(PostSevice)
}
