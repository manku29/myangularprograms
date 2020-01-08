import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users  : User[];
  data : Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'Mayank',
        lastName: 'Dubey',
        email: 'm@gmail.com',    
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide : true
      },
      {
        firstName: 'Vipin',
        lastName: 'Tomar',
        email: 'vt@gmail.com',
        isActive: false,
        registered: new Date('07/12/2019 09:30:00'),
        hide : true
      },
      {
        firstName: 'Jitendra',
        lastName: 'Raghuvanshi',
        email: 'jr@gmail.com',
        isActive: true,
        registered: new Date('06/02/2019 08:45:00'),
        hide : true
      },
      {
        firstName: 'Jitendra',
        lastName: 'Pawar',
        email : 'jp@gmail.com',
        hide : true
      }
    ]

  }
    getUsers() : Observable<User[]> {
      console.log("get the user from services..");
      return of(this.users);
    }
    addUsers(user:User){
      this.users.unshift(user);
    }

    getData(){
      this.data = new Observable( obsrver => {
        setTimeout(() => {
          obsrver.next(1);
        }, 1000);

        setTimeout(() => {
          obsrver.next(2);
        }, 2000);

        setTimeout(() => {
          obsrver.next(3);
        }, 3000);

        setTimeout(() => {
          obsrver.next(4);
        }, 4000);
              
      });
      return this.data;
    }  
  }

