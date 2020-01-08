import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  post : Post[];
  currentPost:Post ={
    id:0,
    title:'',
    body:''
  };
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.post = posts;
    } );
  }

  onNewPost(postObj:Post){
  this.post.unshift(postObj);
  }

  editPost(post:Post){
    console.log("edit post called ");
    this.currentPost = post;
  }

}
