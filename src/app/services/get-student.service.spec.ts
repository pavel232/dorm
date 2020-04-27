import { TestBed } from '@angular/core/testing';

import { GetStudentService } from './get-student.service';

describe('GetStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentService = TestBed.get(GetStudentService);
    expect(service).toBeTruthy();
  });
});
