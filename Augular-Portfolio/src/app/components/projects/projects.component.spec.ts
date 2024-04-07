
//spec.ts
import { TestBed } from '@angular/core/testing';
import { ProjectService } from '../../services/project.service';

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
});

// Path: Augular-Portfolio/src/app/services/project.service.ts