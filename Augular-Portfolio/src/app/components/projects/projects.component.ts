import { Component,Input,Output,EventEmitter,OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tag } from "../../models/tag";
import { Category } from "../../models/catergory";  

import { ProjectFilterPipe } from "../../pipes/project-filter.pipe";

import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/project";

import { ActivatedRoute } from "@angular/router";
import { ProjectComponent } from "../project/project.component";


@Component({
    selector: "app-projects",
    standalone: true,
    templateUrl: "./projects.component.html",
    styleUrl: "./projects.component.scss",
    imports: [CommonModule, ProjectFilterPipe, ProjectComponent]
})

export class ProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

projects: Project[] = [];

getProjects(): void {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
        this.projects = projects;
    });
}

getProjectsByCategory(): void {
    const categorySlug = String(this.route.snapshot.paramMap.get("slug"));
    this.projectService.getProjectsByCategory(categorySlug).subscribe((data) => {
        this.projects = data;
    });
}

ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['slug']) {
        this.getProjectsByCategory();
      } else {
        this.getProjects();
      }
    });
  }
  


    @Input() categoryFilter: Category | undefined;
    @Output() newCategoryFilterEvent = new EventEmitter<Category>();
    @Input() tagFilter: Tag | undefined;
    @Output() newTagFilterEvent = new EventEmitter<Tag>();
  
    setCategoryFilter(category: Category) {
      this.categoryFilter = category;
      this.newCategoryFilterEvent.emit(category);
    }
  
    setTagFilter(tag: Tag) {
      this.tagFilter = tag;
      this.newTagFilterEvent.emit(tag);
    }
  
    clearFilters() {
      this.categoryFilter = undefined;
      this.tagFilter = undefined;
    }


  selectedProject?: Project;

  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
}
}