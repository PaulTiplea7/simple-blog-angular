import { Component, OnInit } from '@angular/core';
import data from "../../../assets/blog-posts.json";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts = data;
  id : any;
  post:any

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.post = this.posts.find(element => element.id == this.id);

    console.log(this.post)


}




}
