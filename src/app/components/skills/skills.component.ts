import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills = [
    { name: 'Java', value: 90 },
    { name: 'Spring Boot', value: 85 },
    { name: 'Angular', value: 80 },
    { name: 'MySQL', value: 80 },
    { name: 'Python', value: 70 },
    { name: 'Machine Learning', value: 65 }
  ];
  
}
