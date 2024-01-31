import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import categoriesData from '../assets/data/categories.json';
import projectsData from '../assets/data/projects.json';
import tagsData from '../assets/data/tags.json';
import { filter } from 'rxjs';


export class Category {
  id!: number;
  name!: string;
  slug!: string;

}
const CATEGORIES: Category[] = categoriesData as Category[];

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}
const TAGS: Tag[] = tagsData as Tag[];
export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}
const PROJECTS: Project[] = projectsData as Project[];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = "Chuan's showcase";
  footer = "© 2024 Chuan He";
  public categories = CATEGORIES;
  public projects = PROJECTS;
  public tags = TAGS;
  selectedCategory: Category | undefined;
  selectedTag: Tag | undefined;
  categoryFilter(category: Category) {
    this.selectedCategory = category;
    
  }
  TagFilter(tag: Tag) {
    this.selectedTag = tag;
  }


}
