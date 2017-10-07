import { TestBed, inject } from '@angular/core/testing';

import { CommonTodoService } from './common-todo.service';

describe('CommonTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonTodoService]
    });
  });

  it('should be created', inject([CommonTodoService], (service: CommonTodoService) => {
    expect(service).toBeTruthy();
  }));
});
