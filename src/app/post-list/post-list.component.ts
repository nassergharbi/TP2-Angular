import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service'; // 25
import {Subscription} from 'rxjs';
//import { POSTS } from '../app.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  POSTS: any[];
  //posts = POSTS;
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.POSTS = this.postService.POSTS;

    this.postSubscription = this.postService.postSubject.subscribe(
      (POSTS: any[]) => {
        this.POSTS = POSTS;
      }
    );
    this.postService.emitPostSubject();

  }

}
