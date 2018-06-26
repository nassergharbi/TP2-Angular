import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  @Input() indexOfPost: number; // 25

  // 26:
  POSTS: any[];
  postSubscription: Subscription;


  constructor(private postService: PostService) {
  }

  ngOnInit() {
    // 26:
    this.postSubscription = this.postService.postSubject.subscribe(
      (POSTS: any[]) => {
        this.POSTS = POSTS;
      }
    );
    this.postService.emitPostSubject();
  }

  onIncrementLoveIts() {
    this.postService.incrementLoveIts(this.indexOfPost);
  }

  onDecrementLoveIts() {
    this.postService.decrementLoveIts(this.indexOfPost);
  }

  onRemovePost() { // 25
    this.postService.removePost(this.indexOfPost);
    console.log(this.indexOfPost);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
