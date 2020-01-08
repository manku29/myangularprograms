import { Component, OnInit , ViewChild } from '@angular/core';
import {UserService} from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : User = {
    firstName : '',
    lastName : '',
    email : '',
    address : {
      street : '',
      city : '',
      state : '' 
    }
  }
  users: User[];
  showExtended = false;
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
 // @ViewChild('userForm') form : any;
  data : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(data =>{
      console.log(data);
    })
     this.userService.getUsers().subscribe(users =>{
      this.users = users;
      this.loaded = true;
     }
     );
    // setTimeout(() => {
     

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date() ;

  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName : '',
  //     lastName : '',
  //     email : '',
  //   }
    }
  

  fireEvent(e){
    console.log('event called........');
    console.log("event value: "+e.target.value);
    console.log("event type:  " +e.type);
  }
  
  toggleHide(user:User){ 
    user.hide= !user.hide;
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    console.log("I am Submit event called.....");
    if(!valid){
      console.log("No a valid user");
    }else {
      value.isActive = true;
      value.hide = false;
      value.registered = new Date();
      this.userService  .addUsers(value);
    }
    // this.form.reset();
  }


}
