import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { SurveyService } from '../../shared/survey.service';
import { Survey } from '../../survey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {

  public surveys!:any;

  constructor(private  _surveyService: SurveyService, private router:Router) { }

  ngOnInit(): void {
    this.readSurveys();
  }

  readSurveys(): void {
    this._surveyService.readSurveys()
      .subscribe({
        next: (data:any) => {
          this.surveys = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  doUpdate(survey:Survey){
    this._surveyService.setter(survey);
    this.router.navigate(['/createUpdate']);
  }

  doDelete(survey:any){
    this._surveyService.deleteSurvey(survey._id).subscribe(
      data=>{
        this.surveys.splice(this.surveys.indexOf(survey),1);
      },
      error=>{

      }
    )
  }
}
