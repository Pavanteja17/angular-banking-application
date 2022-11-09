import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/Data.Service/user.service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : Array<any>

  constructor(private userService : UserService) {
    this.users = userService.getAllUsers()
    console.log(this.users)
  }

  ngOnInit(): void {
  }

  @Input()
  account: any
}