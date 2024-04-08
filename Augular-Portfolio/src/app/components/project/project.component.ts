import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { ProjectService } from "../../services/project.service";    
import { Project } from "../../models/project";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./project.component.html",
  styleUrl: "./project.component.scss",
})

export class ProjectComponent {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.getProject();
  }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.projectService.getProject(id)
  }

  goBack(): void {
    this.location.back();
  }
}
