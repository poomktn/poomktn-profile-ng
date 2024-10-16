import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class Box {
  @Input() title = ''
  @Input() color = ''
  @Input() class = ''
}
