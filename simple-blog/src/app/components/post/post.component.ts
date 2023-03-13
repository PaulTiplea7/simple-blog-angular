import { Component, OnInit } from '@angular/core';
import data from '../../../assets/blog-posts.json';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/types/post.model';
import { filter, map, Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts = data;
  id: string | undefined;
  // NOTE: Use observables
  post$: Observable<Post> | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(
      map((params) => {
        this.id = params['id'];
        if (!this.id) return;
        return this.postsService.getOne(this.id);
      }),
      filter((post) => !!post), // Do not emit if post is null or undefined
      map((definedPost) => definedPost as Post) // Force cast since filer removed the undefined / null possibilities
    );
  }
}
