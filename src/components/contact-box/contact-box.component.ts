import { Component } from '@angular/core';
import { Box } from '../index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ContactBox',
  standalone: true,
  imports: [Box, CommonModule],
  templateUrl: './contact-box.component.html',
  styleUrl: './contact-box.component.scss'
})
export class ContactBox {
  TELEPHONE_NUMBER = '092-416-4261'
  mailTooltip = false
  setTooltip(bool: boolean) {
    this.mailTooltip = bool
  }
  // const GITHUB_LINK = 'https://github.com/poomktn'
  // const mailTooltip = ref(false)
  
  // function setTooltip(bool: boolean) {
  //   mailTooltip.value = bool
  // }
}
