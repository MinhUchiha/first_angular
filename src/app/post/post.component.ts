import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post = new Post("");
  posts = [];
  constructor() {
  }
  ngOnInit() {
  }
  setAuthor(event){
    this.post.author = event.value;
    console.log(event);
  }
  addPost(){
    var newpost = new Post(this.post.content);
    newpost.author = this.post.author;
    this.posts.push(newpost);
  }
}
