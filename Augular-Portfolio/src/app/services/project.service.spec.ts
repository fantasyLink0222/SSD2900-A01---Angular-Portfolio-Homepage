// project.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService]
    });
    service = TestBed.inject(ProjectService);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  

  // Additional tests for other methods in ProjectService...
});
