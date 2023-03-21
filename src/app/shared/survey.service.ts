import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../survey';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private survey!:Survey;
  private baseuri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) {

   }

  createSurvey(survey:Survey){
    return this.http.post(this.baseuri+'/create', survey, {headers: this.headers});
  }

  readSurveys(){
    return this.http.get(this.baseuri+'/read', {headers: this.headers});
  }

  updateSurvey(){
    console.log('gggggg');
    return this.http.put(this.baseuri+'/update', {headers: this.headers});
  }

  deleteSurvey(id:string){
    return this.http.delete(this.baseuri+'/delete/'+id, {headers: this.headers});
  }

  setter(survey:Survey){
    this.survey=survey;
  }
  getter(){
    return this.survey;
  }

}
