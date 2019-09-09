import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MoviealbumsComponent } from './moviealbums/moviealbums.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritealbumsComponent } from './favoritealbums/favoritealbums.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'moviealbums', component: MoviealbumsComponent },
  { path: '', component: SignupComponent },
  { path: 'favoritealbums', component: FavoritealbumsComponent }
  
]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MoviealbumsComponent,
    FavoritealbumsComponent,
    MovieslistComponent,
   
   
  ],
  imports: [
    BrowserModule, BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, Ng2SearchPipeModule,
   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
