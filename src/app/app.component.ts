import {Component, OnInit} from '@angular/core';
import { Post } from './post'; // afin de pouvoir utiliser la classe Post
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor () {}
}

 // export const POSTS: any[];
