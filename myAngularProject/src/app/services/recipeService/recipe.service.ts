import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipeInterface } from '../../interfaces/recipeInterface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  imgUrl: String = "http://localhost:1235/"
  recipeUrl: String = "http://localhost:1235/recipes/"
  constructor(private myHttp: HttpClient) { }
  getAllRecipe(): Observable<Array<recipeInterface>> {
    return this.myHttp.get<Array<recipeInterface>>(`${this.recipeUrl}getAllRecipe`)
  }
  getRecipeById(id: String): Observable<recipeInterface> {
    console.log("recipe id: "+id);
    return this.myHttp.get<recipeInterface>(`${this.recipeUrl}getRecipeById/${id}`)
  }
  addOrUpdateRecipe(recipe: recipeInterface): Observable<boolean> {
    return this.myHttp.put<boolean>(`${this.recipeUrl}addOrUpdateRecipe`, recipe)
  }
  deleteRecipe(userPassword: String, recipeId: String): Observable<boolean> {
    return this.myHttp.delete<boolean>(`${this.recipeUrl}addOrUpdateRecipe/${userPassword}/${recipeId}`)
  }
  
   uploadFile(formData: FormData) {
      return this.myHttp.post<{ filename: string }>('/upload', formData);
    }
}
