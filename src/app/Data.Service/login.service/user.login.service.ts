import { Injectable } from '@angular/core';
import { IloginUsers } from './login.users';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  users:IloginUsers[]=[
    {
      userName:"admin",
      password:"12345678"
    },
    {
      userName:"temp1@wf.com",
      password:"qwerty12"
    },
    {
      userName:"temp2@wf.com",
      password:"qwerty12"
    }
  ]

  addUser(user:IloginUsers){
    this.users.push(user);
    console.log(user.password);
    
  }

  validateUser(uname:string,pass:string):boolean{
    for(var i=0;i< this.users.length;i++){
      if(this.users[i].userName== uname)
        if(this.users[i].password==pass)
          return true;
    }
    return false;
  }
  
  deleteUser(uname:string){
    for(var i=0;i< this.users.length;i++){
      if(this.users[i].userName== uname){
        console.log("user deleted",this.users[i]);
        this.users.splice(i,1);
        break;
      }
      else{
        console.log("user not found!!");
      }
    }
  }
}
