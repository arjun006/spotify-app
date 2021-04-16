/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Arjun Devakumar Student ID: 159076199 Date: April 16, 2021
*
********************************************************************************/ 

import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router }    from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'web422-a4';
  searchString: String;
  token;

  constructor(private router: Router, private authService: AuthService) {}

  handleSearch() {
    this.router.navigate(['/search'], {
      queryParams: {q: this.searchString}
    });
    this.searchString = '';
  }

  ngOnInit(){
    this.router.events.subscribe(
      (event)=>{
        if(event instanceof NavigationStart){
          this.token = this.authService.readToken();

        }
      }
    )
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
