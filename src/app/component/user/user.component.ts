import {Component} from '@angular/core';
import {User} from '../../models/User';
@Component({
 selector : 'app-user',
 templateUrl: './user.component.html',
 styleUrls:['./user.component.css']
//  styles: ['
//     h1 {
//         color:rgb(225, 156, 65);
//     }
//      ']
 //template: '<h2>Mayank Dubey </h2>'
})

export class UserComponent { 

    user : User ;

  constructor() {
  this.user = {
    firstName : 'Mayank',
    lastName : 'Dubey' ,
    email : 'e@asd.com' ,
    address : {
    city : 'Pune',
    street : 'AWHO Hadapsar ',
    state : 'M.H.'
    }
    }
  }
 }
 