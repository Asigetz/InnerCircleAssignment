import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Question} from '../question';
import { QUESTIONS } from '../questionsTypes';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions = QUESTIONS;
  selectedQuestion: Question;
  @Output() talk: EventEmitter<Question> = new EventEmitter<Question>();

  constructor() {
    this.selectedQuestion = new Question();
  }

  ngOnInit() {
  }
  onSelect(): void {
    this.selectedQuestion.content = [];
  }
  talkBack(e: String[]) {
    const newContent = [];
    for (const item of e) {
      newContent.push(item);
    }
    this.selectedQuestion.content = e;
    this.talk.emit(this.selectedQuestion);
  }
}
