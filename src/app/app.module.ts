// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule ekleyin
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // PostService ekleyin
import { MatCardModule } from '@angular/material/card';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { UserService } from './user.service';
import { AlbumService } from './album.service';
import { MatButtonModule } from '@angular/material/button'; // AlbumService ekleyin

@NgModule({
  declarations: [AppComponent, PostListComponent, AlbumListComponent, AlbumDetailsComponent, UserListComponent, PhotoListComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MatCardModule, MatButtonModule], // HttpClientModule'ı ekleyin
  providers: [PostService, UserService,AlbumService], // PostService ekleyin
  bootstrap: [AppComponent],
})
export class AppModule { }
