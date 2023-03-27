import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { SurveyService } from '../../shared/survey.service';
import { Survey } from '../../survey';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  public survey!: Survey;
  constructor(private surveyService: SurveyService, private router: Router) {
  }

  ngOnInit(): void {
    this.survey = this.surveyService.getter();
  }

  createOrUpdate() {
    console.log('mmmmmmmmmmmm');
    if(this.survey._id == undefined) {
      this.surveyService.createSurvey(this.survey)
      .subscribe(
        data => {
          console.log('yyyyyyyyyyyy');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      )
    } else {
      this.surveyService.updateSurvey(this.survey._id,this.survey)
      .subscribe(
        data => {
          console.log("dssssdsd");
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
