import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { PostSchema } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  baseUrl = 'http://localhost:3000';
  post = signal<PostSchema | null>(null);

  setCreatePost(post: Pick<PostSchema, "title" | "description">) {
    this.http
      .post<PostSchema>(`${this.baseUrl}/posts`, { ...post, id: Math.random() * 100 })
      .subscribe((response) => {
        this.post.set(response);
      });
  }
}
