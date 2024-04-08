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
 

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}
  project!: Project;
  ngOnInit(): void {

    this.getProject();
  }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log("project id", id);
    this.projectService.getProject(id).subscribe((project) => {
      if (project) {
        this.project = project;
      }
      else
      {
        console.log("No project found");
      }
      console.log("project", this.project);
    }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
