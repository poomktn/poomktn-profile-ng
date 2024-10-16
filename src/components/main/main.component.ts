import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Box, ContactBox, EducationBox, ExperienceBox, InterestBox, IntroduceBox, SkillBox, SystemBox } from '../index'
@Component({
  selector: 'main-box',
  standalone: true,
  imports: [RouterOutlet, Box, ContactBox, EducationBox, ExperienceBox, InterestBox, IntroduceBox, SkillBox, SystemBox],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class Main {
  title = 'poomktn-profile-ng';
  print() {
    window.print()
  }
}
