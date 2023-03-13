import { Component, OnInit } from '@angular/core';
// NOTE: Use data from files in centralized places like services and only once
// import data from "../../../assets/blog-posts.json";
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/types/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  // NOTE: Don't leave unused proprieties
  constructor(private readonly postsService: PostsService) {}

  // NOTE: Type everything
  posts$: Observable<Post[]> | undefined;

  ngOnInit() {
    this.posts$ = this.postsService.getAll();
  }
}
