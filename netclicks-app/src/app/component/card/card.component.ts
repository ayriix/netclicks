import { Component, Input } from '@angular/core';
type TitleType = string | number;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title: string = '';
}
