import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule ekleyin
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // PostService ekleyin
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, PostListComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule,MatCardModule], // HttpClientModule'ı ekleyin
  providers: [PostService], // PostService ekleyin
  bootstrap: [AppComponent],
})
export class AppModule { }
