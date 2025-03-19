import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';

interface Post { id: string, title: string, description: string }

@Injectable({
  providedIn: 'root',
})
export class PostSevice{
  
  http = inject(HttpClient)
  posts = signal<{ id: string, title: string, description: string }[]>([])
  broadcast: BroadcastChannel

  constructor() {
    this.broadcast = new BroadcastChannel("posts-channel")
    this.getAllPosts()
    this.reloadPosts()
  }
  
  getAllPosts() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe((res) => {
      this.posts.set(res)
      return res
    })
  }

  reloadPosts() {
    this.broadcast.onmessage = event => {
      switch(event.data.type) {
        case "reload": 
          this.getAllPosts();
      }
    }
  } 
}
