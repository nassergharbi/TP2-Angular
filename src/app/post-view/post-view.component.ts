import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  POSTS: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {  }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (POSTS: any[]) => {
        this.POSTS = POSTS;
      }
    );
    this.postService.emitPostSubject();
  }
}
