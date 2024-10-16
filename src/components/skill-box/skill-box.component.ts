import { Component } from '@angular/core';
import { Box } from '../index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'SkillBox',
  standalone: true,
  imports: [Box, CommonModule],
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.scss',
})
export class SkillBox {
  skill: string[] = [
    'Programming languages: JavaScript, TypeScript, Python, Ruby, C++, Java',
    'Moderate English writing and communication skills',
    'Front-end frameworks: React Hook, Vue 2&3, ViteJS, Vuetify, Quasar, Nuxt, React-Native(Android)',
    'State Management: Redux & Zustand (React Hook), Vuex (Vue 2), Pinia (Vue 3)',
    'Page Routing: React Router (React Hook), Vue Router (Vue 2&3)',
    'Code Editor and Extension: Visual Studio Code, ESLint, Prettier',
    'Git tools: GitHub, GitLab, Fork, Sourcetree',
    'Web hosting: Firebase',
    'Database: SQL (in University)',
    'Python basic data science tools: Pandas, ScikitLearn',
  ];
}
