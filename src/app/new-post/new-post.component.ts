import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    this.postService.addPost(title, content, 0, new Date()); // on ajoute le nouveau post au Service
    this.router.navigate(['/posts']); // on redirige l'utilisateur vers la liste des posts
  }
}
