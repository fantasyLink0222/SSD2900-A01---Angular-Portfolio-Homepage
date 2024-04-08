import { Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';  
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    
    { path: '', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/categories/:slug', component: ProjectsComponent},
    { path: 'projects/:id', component: ProjectComponent },
    { path: '**', redirectTo: ''},

];

