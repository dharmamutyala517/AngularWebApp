import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { QuestionFetchService } from './question-fetch.service';
import { interval, Subscription } from 'rxjs';
import { QuestionModel } from '../data-model/question.model';


@Component({
  selector: 'app-code-evaluation',
  templateUrl: './code-evaluation.component.html',
  styleUrls: ['./code-evaluation.component.css']
})
export class CodeEvaluationComponent implements OnInit {

  constructor(private fetchServ: QuestionFetchService) { }
  sec: number = 59;
  min: number = 59;
  hour: number = 1;
  mockQuestion: QuestionModel = new QuestionModel();
  public questionSubscription: Subscription;
  public showTestCases: boolean=false;

  ngOnInit() {
    
    let timer = setInterval(() => {
      //console.log('Hour : ', this.hour, ' Min : ', this.min, ' Sec : ', this.sec);
      this.sec=this.sec-1;
      if (this.sec === 1) {
        this.min = this.min - 1;
        this.sec = 59;
      }
      if (this.min === 0) {
        this.hour = this.hour - 1;
        this.min = 1;
      }
    }, 1000);
    setTimeout(()=>{
      clearInterval(timer);
    },1000*60*59);

    this.questionSubscription = this.fetchServ.getQuestions().subscribe(data => {
      this.mockQuestion = data;
        console.log(this.mockQuestion);
      });
  }
  
  executeTimer() {
    const source = timer(1000);
    //output: 0
    const subscribe = source.subscribe(val => console.log('Timer :-> ', val));
  }

  showTestCaseAccordian(){
   this.showTestCases=true; 
   console.log(this.showTestCases);
  }
  
}
