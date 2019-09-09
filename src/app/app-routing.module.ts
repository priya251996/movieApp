import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MoviealbumsComponent } from './moviealbums/moviealbums.component';
import { FavoritealbumsComponent } from './favoritealbums/Favoritealbums.component';


const routes: Routes = [
  { path: '', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'moviealbums', component: MoviealbumsComponent},
  { path: 'favoritealbums', component: FavoritealbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
