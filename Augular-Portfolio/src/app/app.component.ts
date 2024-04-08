import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CATEGORIES } from './data/categories';
import { PROJECTS } from './data/projects';
import { TAGS } from './data/tags';
import { filter } from 'rxjs';
import { ProjectFilterPipe } from './pipes/project-filter.pipe';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CategoriesComponent } from "./components/categories/categories.component";
import { TagsComponent } from './components/tags/tags.component';
import { Category } from './models/catergory';
import { Tag } from './models/tag';
import { Project } from './models/project';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        CommonModule,
        RouterLink,
        RouterLinkActive,
        ProjectFilterPipe,
        ProjectComponent,
        ProjectsComponent,
        TagsComponent,
        CategoriesComponent
    ]
})


export class AppComponent {
  title = "Chuan's showcase";
  footer = "© 2024 Chuan He";
  author = "Chuan He";


  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.tagFilter = undefined;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.categoryFilter = undefined;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
  
  selectedProject?: Project;

  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  clearSelectedProject() {
    this.selectedProject = undefined;
  }

}