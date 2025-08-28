import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']   // ✅ fixed
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'E-Commerce App',
      description: 'Full Stack e-commerce web app with JWT, cart, orders.',
      techStack: 'Spring Boot, Angular, MySQL',
      github: 'https://github.com/amarkumar/ecommerce',
      live: 'https://ecom.amarkumar.live'
    },
    {
      title: 'AI LMS',
      description: 'Learning management system with AI chatbot.',
      techStack: 'Spring Boot, Angular, Python, ML',
      github: 'https://github.com/amarkumar/lms-ai',
      live: ''
    }
  ];
}

export interface Project {
  title: string;
  description: string;
  techStack: string;
  github: string;
  live: string;
}
