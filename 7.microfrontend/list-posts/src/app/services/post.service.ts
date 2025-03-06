import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { PostSchema } from '../interface/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  baseUrl = 'http://localhost:3000';
  posts = signal<PostSchema[]>([]);
  constructor() {
    this.getAllPosts();
  }
  getAllPosts() {
    this.http
      .get<PostSchema[]>(`${this.baseUrl}/posts`)
      .subscribe((response) => {
        console.log(response);
        this.posts.set(response);
      });
  }
}
