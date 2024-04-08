// filter-projects.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Pipe({
  name: 'projectFilter',
 
  standalone: true
})
export class ProjectFilterPipe implements PipeTransform {

  // transform(projects: Project[], tag : Tag |undefined ): Project[] {
  //   if (!projects) return [];

  //   let filteredProjects = projects;

  //   // Filter by tags
  //   if (tag) {
  //     filteredProjects = filteredProjects.filter(project =>
  //       project.tags?.some(t => t.name === tag.name));
  //   }


  //   return filteredProjects;
  // }
  transform(projects: Project[], tag: Tag | undefined): Project[] {
    let filteredFigs = [];
    if (tag) {
      filteredFigs = projects.filter((project) => {
        return JSON.stringify(project.tags).indexOf(JSON.stringify(tag)) + 1;
      });
    } else {
      filteredFigs = projects;
    }
    return filteredFigs;
  }


}
