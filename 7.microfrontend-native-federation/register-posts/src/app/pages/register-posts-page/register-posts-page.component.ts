import { Component, inject, signal } from '@angular/core';
import { PostSchema } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'register-posts-page',
  templateUrl: './register-posts-page.component.html',
  styleUrl: './register-posts-page.component.scss',
})
export default class RegisterPostsPageComponent {
  form = signal<Pick<PostSchema, 'title' | 'description'>>({
    title: '',
    description: '',
  });
  postServices = inject(PostService);

  onChangeProperty(value: string, property: string) {
    this.form.update((prevValue) => ({ ...prevValue, [property]: value }));
  }

  onSubmit() {
    this.postServices.setCreatePost(this.form());
  }
}
