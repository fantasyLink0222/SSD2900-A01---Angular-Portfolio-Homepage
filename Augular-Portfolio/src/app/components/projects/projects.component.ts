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

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  projects: Project[] = [];

  getProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

    ngOnInit(): void {
        this.getProjects();
    }

    // @Input() themeFilter: Theme | undefined;
    // @Output() newThemeFilterEvent = new EventEmitter<Theme>();
    // @Input() tagFilter: Tag | undefined;
    // @Output() newTagFilterEvent = new EventEmitter<Tag>();
  
    // setThemeFilter(theme: Theme) {
    //   this.themeFilter = theme;
    //   this.newThemeFilterEvent.emit(theme);
    // }
  
    // setTagFilter(tag: Tag) {
    //   this.tagFilter = tag;
    //   this.newTagFilterEvent.emit(tag);
    // }
  
    // clearFilters() {
    //   this.themeFilter = undefined;
    //   this.tagFilter = undefined;
    // }


  selectedProject?: Project;

  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
}
}