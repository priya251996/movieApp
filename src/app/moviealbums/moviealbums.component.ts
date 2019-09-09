import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviealbums',
  templateUrl: './moviealbums.component.html',
  styleUrls: ['./moviealbums.component.css']
})
export class MoviealbumsComponent implements OnInit {
  MovieName
  Language
  Genre
  constructor(private titleService: Title, private http: HttpClient, private router: Router) {
    this.titleService.setTitle("MovieAlbums")
  }

  ngOnInit() {
  }

  save() {
    let body = {
      'MovieName': this.MovieName,
      'Language': this.Language,
      'Genre': this.Genre,
     'id': JSON.parse(localStorage.getItem("logindata")).success._id
    }
  let httpHeaders = new HttpHeaders({ 'id': localStorage.getItem("logindata") })
    console.log(body)
    this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies', body).subscribe(data => {
      console.log(data)
      this.router.navigate(['/favoritealbums'])
    })
  }
  cancel() {
    console.log('cancelled')
    
  }

}
