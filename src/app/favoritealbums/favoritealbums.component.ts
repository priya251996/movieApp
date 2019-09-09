import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-favoritealbums',
  templateUrl: './favoritealbums.component.html',
  styleUrls: ['./favoritealbums.component.css']
})
export class FavoritealbumsComponent implements OnInit {
  name: any;
  tabledata;
  search:any;
 constructor(private http:HttpClient,private router:Router) { }
 ngOnInit() {
   let headers={'id':JSON.parse(localStorage.getItem("logindata")).success._id}
   this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+headers.id).subscribe(data=>{
   //   this.moviedata.push(data)
      console.log("4",data)
  this.tabledata=data['success'].movies })
 console.log(this.tabledata)
 }
 addMovie(){
    this.router.navigateByUrl("moviealbums")
 }
}
