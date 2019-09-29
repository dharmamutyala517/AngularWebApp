import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionModel } from '../data-model/question.model';


@Injectable({
  providedIn: 'root'
})


export class QuestionFetchService {

  private questionMockData= 'http://localhost:4200/assets/Mock-Data/Question.json'
  constructor(private http: HttpClient) { }
  public getQuestions(): Observable<QuestionModel>{
    return this.http.get<QuestionModel>(this.questionMockData);
  }
}
