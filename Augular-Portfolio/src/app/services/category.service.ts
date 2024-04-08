import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/catergory';
import { CATEGORIES } from '../data/categories';





@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() {}

 

  getCategories(): Category[] {
  
    return CATEGORIES
  }

 
}