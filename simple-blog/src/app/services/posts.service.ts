import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import data from '../../assets/blog-posts.json';
import { Post } from '../types/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private postsSubject: BehaviorSubject<Post[]>;

  constructor() {
    this.postsSubject = new BehaviorSubject<Post[]>(data);
  }

  getAllSnapshot(): Post[] {
    return this.postsSubject.value;
  }

  getAll(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  getOne(id: string) {
    // NOTE: we take just the immediate value
    return this.postsSubject.value.find((p) => p.id === id);
  }
}
