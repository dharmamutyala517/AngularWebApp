import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEvaluationComponent } from './code-evaluation.component';

describe('CodeEvaluationComponent', () => {
  let component: CodeEvaluationComponent;
  let fixture: ComponentFixture<CodeEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
