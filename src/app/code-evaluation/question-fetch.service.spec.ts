import { TestBed } from '@angular/core/testing';

import { QuestionFetchService } from './question-fetch.service';

describe('QuestionFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionFetchService = TestBed.get(QuestionFetchService);
    expect(service).toBeTruthy();
  });
});
