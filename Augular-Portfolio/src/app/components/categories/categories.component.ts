//component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../models/catergory';
// import { TAGS } from '../data/categories';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  // categories = TAGS;
  constructor(private tagService: CategoryService) {}

  // themes = THEMES;
  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.tagService.getCategories();
    };
  
  ngOnInit(): void {
    this.getCategories();
  }

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }
}
