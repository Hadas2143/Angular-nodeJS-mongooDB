import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-nuv',
  imports: [RouterOutlet, RouterLink],
  templateUrl:'./nuv.component.html',
  styleUrl: './nuv.component.css'
})
export class NuvComponent {
  constructor(public myUserService: UserService) { }

}
