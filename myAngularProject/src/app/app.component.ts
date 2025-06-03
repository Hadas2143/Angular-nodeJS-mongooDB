import { Component } from '@angular/core';
import { NuvComponent } from "./components/nuv/nuv.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ NuvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myp';
  constructor(){}
}
