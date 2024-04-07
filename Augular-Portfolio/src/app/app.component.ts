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







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ProjectFilterPipe,
    ProjectComponent,
    ProjectsComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = "Chuan's showcase";
  footer = "© 2024 Chuan He";
  author = "Chuan He";

  public categories = CATEGORIES; 
  public projects = PROJECTS;
  public tags = TAGS;

  

  }



