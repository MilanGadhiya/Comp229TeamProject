import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../../shared/survey.service';
import { Survey } from '../../survey';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  authenticated = false;
  constructor(private router:Router, private surveyService: SurveyService, private http: HttpClient) {}

  ngOnInit(): void {
    SurveyService.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  newSurvey(event:any){
    event.preventDefault();
    this.surveyService.setter(new Survey());
    this.router.navigate(['/createUpdate']);
  }

  register(event:any){
    event.preventDefault();
    this.router.navigate(['/register']);
  }

  login(event:any){
    event.preventDefault();
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.http.post('http://localhost:8080/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }
}
