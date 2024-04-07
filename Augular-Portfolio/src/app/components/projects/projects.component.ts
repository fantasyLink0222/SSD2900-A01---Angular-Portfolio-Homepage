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
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})

export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  categories: Category[] = [];
  tags: Tag[] = [];
  selectedCategory: Category | undefined;
  selectedTag: Tag | undefined;
  selectedProject: Project | undefined;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
    this.selectedTag = undefined;
    this.selectedProject = undefined;
  }

  onSelectTag(tag: Tag): void {
    this.selectedTag = tag;
    this.selectedCategory = undefined;
    this.selectedProject = undefined;
  }

  onSelectProject(project: Project): void {
    this.selectedProject = project;
    this.selectedCategory = undefined;
    this.selectedTag = undefined;
  }
}