import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipeService/recipe.service';
import { recipeInterface } from '../../interfaces/recipeInterface';

@Component({
  selector: 'app-more-details',
  imports: [],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  Recipe: recipeInterface =
    {
      "_id": "",
      "recipyName": "",
      "image": "",
      "level": "",
      "time": 0,
      "type": "",
      "userCode": "",
      "ingredients": []
    }
  constructor(private myRecipeService: RecipeService, private myActivatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.myActivatedRoute.params.subscribe((params: any) => {
      this.myRecipeService.getRecipeById(params.id).subscribe({
        next: r => {
          this.Recipe = r;
        },
        error: e => {
          console.log(e)
        }
      })
    })
  }

}
