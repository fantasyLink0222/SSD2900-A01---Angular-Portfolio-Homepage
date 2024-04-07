
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';
import { PROJECTS } from '../data/projects';




@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects
  }

 getProject(id: number): Observable<Project> {
        const project = PROJECTS.find(p => p.id === id) as Project;
        return of(project);
    }

    getProjectsByTag(tag: string): Observable<Project[]> {
        const projects = PROJECTS.filter(p => p.tags?.some(t => t.name === tag));
        return of(projects);
    }
    
    getProjectsByCategory(category: string): Observable<Project[]> {
        const projects = PROJECTS.filter(p => p.category?.name === category);
        return of(projects);
    }

}
