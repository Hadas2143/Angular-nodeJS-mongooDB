import { Component } from '@angular/core';
import { userInterface } from '../../interfaces/userInterface';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';
import { error, log } from 'console';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myUser: userInterface = {
    _id: "",
    name: "",
    password: "",
    address: "",
    phone: "",
    isManager: false,
    favoriteRecipes: []
  }
  constructor(private myService: UserService) { }
  save() {
    console.log(this.myUser._id);
    this.myService.addUser(this.myUser).subscribe({
      next:(x)=>{
        alert("💯")
      },
      error:(e)=>{
        alert("failed")
      }
    })
    this.myUser = {
    _id: "",
    name: "",
    password: "",
    address: "",
    phone: "",
    isManager: false,
    favoriteRecipes: []
  }
  }
  
}