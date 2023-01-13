import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = 'Default title';
  @Input() subtitle = 'Defult subtitle';
  @Input() imgSource = '';
  @Input() cardContent = 'Default image content';
  @Input() action1 = 'Default action 1';
  @Input() action2 = 'Default action 2';
  @Input() cardFooter = 'Default footer';
}
