import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addRecipe', component: AddRecipeComponent },
    { path: 'moreDetails/:id', component: MoreDetailsComponent },
    { path: '**', component: HomeComponent }
];