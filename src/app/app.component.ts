import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, Box, ContactBox, EducationBox, ExperienceBox, InterestBox, IntroduceBox, SkillBox, SystemBox],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
