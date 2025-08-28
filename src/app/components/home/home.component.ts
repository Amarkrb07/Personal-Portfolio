import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('typingElement', { static: true }) typingElement!: ElementRef;

  ngAfterViewInit() {
    if (this.typingElement && this.typingElement.nativeElement) {
      const options = {
        strings: [
          "Java Full Stack Developer",
          "Java | Spring Boot | Hibernate(ORM) | REST APIs",
          "HTML | CSS | TypeScript | ANGULAR",
          "MySQL | MongoDB | AWS | MICROSERVICE",
          "Python | AI | ML "
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
      };

      new Typed(this.typingElement.nativeElement, options);
    }
  }
}
