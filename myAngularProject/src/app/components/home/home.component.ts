import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { recipeInterface } from '../../interfaces/recipeInterface';
import { RecipeService } from '../../services/recipeService/recipe.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HttpClientModule, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrRecipe: Array<recipeInterface> = [
    {
      "_id":"",
      "recipyName": "",
      "image": "",
      "level": "",
      "time": 0,
      "type": "",
      "userCode": "",
      "ingredients": []
    }
  ]
  constructor(private myRecipeService: RecipeService,
              private myHttp: HttpClient,
              private myRout: Router) { }
  ngOnInit() {
    this.myRecipeService.getAllRecipe().subscribe((x: any) => this.arrRecipe = x)
  }
  moreDetails(recipeId: String) {
    console.log("more")
    this.myRout.navigate([`/moreDetails/${recipeId}`])
  }
}