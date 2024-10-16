import { Component } from '@angular/core';
import { Box } from "../index";
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'SystemBox',
  standalone: true,
  imports: [Box, CommonModule],
  templateUrl: './system-box.component.html',
  styleUrl: './system-box.component.scss'
})
export class SystemBox {
  system: string[] = [
    'Login with email, password and SSO',
    'Initializing project template (fonts, colors)',
    'Forget and Reset password',
    'CRUD Table',
    'State Management',
    'Device Permission Request',
  ]
}
