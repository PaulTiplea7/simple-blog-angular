import { Component, OnInit } from '@angular/core';
import data from "../../../assets/blog-posts.json";
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private router:Router){

  }

  posts = data;

  ngOnInit() {
    console.log(data)
  }

}
