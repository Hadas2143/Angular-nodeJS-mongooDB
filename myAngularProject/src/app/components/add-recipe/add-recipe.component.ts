import { Component } from '@angular/core';
import { ingredient, recipeInterface } from '../../interfaces/recipeInterface';
import { RecipeService } from '../../services/recipeService/recipe.service';
import { FormsModule } from '@angular/forms';
import { error } from 'node:console';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  newRecipe: recipeInterface = {
    "_id": "",
    "recipyName": "",
    "image": "",
    "level": "",
    "time": 0,
    "type": "",
    "userCode": "",
    "ingredients": []
  }
  newIngredient: ingredient = {
    "name": "",
    "amount": 0
  }
  constructor(private myRecipeService: RecipeService, private myHttp: HttpClient) { }
  send() {
    this.myRecipeService.addOrUpdateRecipe(this.newRecipe).subscribe({
      next: (x) => {
        alert("add with succeses")
      },
      error: (e) => {
        alert("failed")
      }
    })
    this.newRecipe = {
      "_id": "",
      "recipyName": "",
      "image": "",
      "level": "",
      "time": 0,
      "type": "",
      "userCode": "",
      "ingredients": []
    }

  }
  addIngredient() {
    this.newRecipe.ingredients.push({ ...this.newIngredient })
    this.newIngredient = {
      "name": "",
      "amount": 0
    }
  }
  fileName: string = ""
  selectFile: File | null = null
  onChangeFile(event: Event) {
    const thisInput = event.target as HTMLInputElement
    if (thisInput.files && thisInput.files.length > 0) {
      this.selectFile = thisInput.files[0]
    }
    this.uploadFile()
  }
  uploadFile(): void {
    if (!this.selectFile)
      return;
    const dataForm = new FormData()
    dataForm.append('image', this.selectFile)
    this.myHttp.post<{ message: String, myFileName: String }>('http://localhost:1235/upload', dataForm)
      .subscribe({
        next: (r) => {
          this.newRecipe.image = r.myFileName;
        },
        error: (e) => console.error("my error", e)
      })
  }
}

