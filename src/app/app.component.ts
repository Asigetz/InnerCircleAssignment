import { Component } from '@angular/core';
import {Question} from './question';
import { QUESTIONS } from './questionsTypes';
import {SurveyServiceService} from './survey-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Survey';
  questions = QUESTIONS;
  allQuestions: Question[];
  constructor(private surveyService: SurveyServiceService) {
    this.allQuestions = [];
  }
  compareType(type: String, questionType: String): boolean {
    return type === questionType;
  }
  talkBack(e: Question) {
    const newQuestion = new Question();
    newQuestion.content = e.content;
    newQuestion.questionType = e.questionType;
    newQuestion.title = e.title;
    this.allQuestions.push(newQuestion);
  }
  sendButtonAction(): void {
    const beforeJson = {Survey: this.title, Questions: this.allQuestions};
    this.surveyService.sendPostRequest(JSON.stringify(beforeJson));
    alert('Survey sent!');
  }
}
