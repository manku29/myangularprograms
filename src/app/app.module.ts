import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms'
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {UserComponent} from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {DataService} from './services/data.service';
import {PostService} from './services/post.service';
import { PostsComponent } from './component/posts/posts.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService,PostService], 
  bootstrap: [AppComponent]
})
export class AppModule { }


