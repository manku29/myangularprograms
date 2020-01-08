import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';

import {PostsComponent} from './component/posts/posts.component';

import {UsersComponent} from './component/users/users.component';

// import { CommonModule } from '@angular/common';
const routes: Routes = [
  {  path:'', component:HomeComponent},
  {  path:'users', component:UsersComponent},
  {  path:'posts', component:PostsComponent }
];
@NgModule({
  exports : [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
