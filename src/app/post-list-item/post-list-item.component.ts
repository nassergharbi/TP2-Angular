import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() indexOfPost: number; // 25

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onIncrementLoveIts() {
    return this.post.loveIts++;
  }

  onDecrementLoveIts() {
    return this.post.loveIts--;
  }

  onRemovePost() { // 25
    this.postService.removePost(this.indexOfPost);
  }
}
