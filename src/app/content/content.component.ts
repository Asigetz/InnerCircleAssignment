import {Component, OnInit, Input, NgZone, Output, EventEmitter, OnChanges} from '@angular/core';
import {Question} from '../question';
import {QUESTIONS} from '../questionsTypes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  numberOfOptions: number[];
  questionOptions: String[];
  questions = QUESTIONS;
  currentIndex: number;
  @Input() questionType: String;
  @Output() talk: EventEmitter<String[]> = new EventEmitter<String[]>();
  constructor() {
    this.currentIndex = 0;
    this.questionOptions = [];
    this.numberOfOptions = [];
  }
  ngOnInit() {
  }
  ngOnChanges() {
    this.currentIndex = 0;
    this.questionOptions = [];
    this.numberOfOptions = [];
  }
  compareType(type: String): boolean {
    return type === this.questionType;
  }
  addInput(): void {
    this.numberOfOptions.push(this.numberOfOptions.length);
  }
  talkBack() {
    this.talk.emit(this.questionOptions);
  }
}
