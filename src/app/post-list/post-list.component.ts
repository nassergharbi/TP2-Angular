import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service'; // 25
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  POSTS: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (POSTS: any[]) => {
        this.POSTS = POSTS;
      }
    );
    this.postService.emitPostSubject();

  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
