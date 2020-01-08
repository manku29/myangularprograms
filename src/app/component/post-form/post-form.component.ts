import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
 @Input() currentPost1:Post;
 @Output() newPost:EventEmitter<Post> = new EventEmitter()  ;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title,body){
    if(!title || !body){
      console.log("please post data");
    }{
      console.log(title,body);
      this.postService.savePost({title,body} as Post)
        .subscribe(post =>  {
          this.newPost.emit(post);
          console.log(post);
        });
      
      } 

    }
    

  }


