// categories.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { Category } from '../models/catergory';

describe('CategoriesService', () => {
  let service: CategoryService;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService]
    });
    service = TestBed.inject(CategoryService);


  });

it('should be created', () => {
    expect(service).toBeTruthy();
});


  // Additional tests for other methods in CategoriesService...
});
