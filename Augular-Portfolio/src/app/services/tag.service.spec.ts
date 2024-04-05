// tag.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TagService } from './tag.service';

describe('TagService', () => {
  let service: TagService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService]
    });
    service = TestBed.inject(TagService);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // Additional tests for other methods in TagService...
});
