// filter-projects.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'projectFilter',
 
  standalone: true
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Project[], searchCategory?: string, searchTags?: string[]): Project[] {
    if (!projects) return [];

    let filteredProjects = projects;

    // Filter by category
    if (searchCategory) {
      filteredProjects = filteredProjects.filter(project =>
        project.category?.name === searchCategory);
    }

    // Filter by tags
    if (searchTags && searchTags.length) {
      filteredProjects = filteredProjects.filter(project =>
        searchTags.every(tag => project.tags?.some(t => t.name === tag)));
    }

    return filteredProjects;
  }
}
