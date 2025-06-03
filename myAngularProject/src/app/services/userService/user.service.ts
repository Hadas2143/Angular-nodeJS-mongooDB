import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from '../../interfaces/userInterface';
import { recipeInterface } from '../../interfaces/recipeInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isConect: boolean = false
  usersUrl: string = "http://localhost:1235/users/"
  constructor(private myHttp: HttpClient) { }
  getAllUsers(): Observable<Array<userInterface>> {
    return this.myHttp.get<Array<userInterface>>(`${this.usersUrl}getAllUsers`)
  }
  addUser(user: userInterface): Observable<boolean> {
    return this.myHttp.post<boolean>(`${this.usersUrl}addUser/`, user)
  }
  getUserByIdAndName(pass: String, name: String): Observable<userInterface> {
    return this.myHttp.get<userInterface>(`${this.usersUrl}getUserByIdAndName/${pass}/${name}`)
  }
  addToFavoriteRecipes(_id: String, recipeId: String): Observable<boolean> {
    return this.myHttp.put<boolean>(`${this.usersUrl}addToFavoriteRecipes/${_id}/${recipeId}`, null)
  }
  getAllFavoriteRrcipe(_id: String): Observable<Array<recipeInterface>> {
    return this.myHttp.get<Array<recipeInterface>>(`${this.usersUrl}getAllFavoriteRrcipe/${_id}`)
  }
}