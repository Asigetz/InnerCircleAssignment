import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SurveyServiceService {

  surveyURL = '127.0.0.1:8080/createSurvey';  // URL to web api

  constructor(private http: HttpClient) { }

  sendPostRequest (json: String): Observable<String> {
    return this.http.post<String>(this.surveyURL, json, httpOptions);
  }
}

