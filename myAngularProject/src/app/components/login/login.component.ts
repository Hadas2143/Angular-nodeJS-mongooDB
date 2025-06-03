import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userInterface } from '../../interfaces/userInterface';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  password: String = ""
  name: String = ""
  myUser: userInterface = {
    _id: "",
    name: "",
    password: "",
    address: "",
    phone: "",
    isManager: false,
    favoriteRecipes: [""]
  }
  constructor(private myService: UserService) { }
  checkUser() {
    this.myService.getUserByIdAndName(this.password, this.name)
      .subscribe({
        next: v => {
          if (v) {
            alert("👍🏻")
            this.myService.isConect = true
          }
        },
        error: e => {
          alert("❌")
        }
      })
    this.password = ""
    this.name = ""
  }
}