import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../../shared/survey.service';
import { Survey } from '../../survey';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  constructor(private router:Router, private surveyService: SurveyService) {}

  ngOnInit() {

  }

  newSurvey(event:any){
    event.preventDefault();
    this.surveyService.setter(new Survey());
    this.router.navigate(['/createUpdate']);
  }
}
