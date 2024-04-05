import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CATEGORIES } from './data/categories';
import { PROJECTS } from './data/projects';
import { TAGS } from './data/tags';

import { filter } from 'rxjs';







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

    
  }

  



