import {Component, OnInit} from '@angular/core';
import { Post } from './post'; // afin de pouvoir utiliser la classe Post
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  POSTS: any[];

  constructor(private postService: PostService) {  }

  ngOnInit() {
    this.POSTS = this.postService.POSTS;
  }
}

 // export const POSTS: any[];
