import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service'; // 25
//import { POSTS } from '../app.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  POSTS: any[];
  //posts = POSTS;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.POSTS = this.postService.POSTS;
  }

}
