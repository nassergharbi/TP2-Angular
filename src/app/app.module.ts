import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { PostViewComponent } from './post-view/post-view.component';
import {RouterModule, Routes} from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostViewComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' } // ce path doit être le dernier de la liste !
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    PostViewComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // pour indiquer au module Router d'Angular que toutes les routes se trouvent dans la constante 'appRoutes'

  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
